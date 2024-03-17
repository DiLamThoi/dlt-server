const mongoose = require('mongoose');

/**
 * Controller class for managing objects.
 */
class BaseController {
    /**
     * Constructs a new ObjectController.
     * @param {Object} objectModel - The object model.
     * @param {Object} edgeModel - The edge model.
     * @param {string} parentId - The parent ID which ID in the edge model.
     */
    constructor(objectModel, edgeModel, parentId) {
        this.objectModel = objectModel;
        this.edgeModel = edgeModel;
        this.parentId = parentId;
        // Bind the methods to the class
        this.create = this.create.bind(this);
    }

    /**
     * Create a new object in the database.
     * Use this for ObjectController with POST method.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @param {Function} next - The next middleware function.
     */
    create(req, res, next) {
        const { data } = req.body;
        const resData = {};
        const id = new mongoose.Types.ObjectId();
        this.objectModel.create({ ...data, id }).then((object) => {
            const jsObject = object.toObject();
            resData[this.objectModel.name] = {
                [jsObject.id]: {
                    ...jsObject,
                    createdTime: new Date().getTime(),
                },
            };
            if (this.parentId) {
                this.edgeModel.findByIdAndUpdate(
                    mongoose.Types.ObjectId(this.parentId),
                    { $push: { itemIds: jsObject.id }, $inc: { total: 1 } },
                    { upsert: true, new: true },
                ).then((edge) => {
                    res.json(resData);
                }).catch(next);
            } else res.json(resData);
        }).catch(next);
    }

    /**
     * Get an object by its ID.
     * use this for ObjectController with GET method.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @param {Function} next - The next middleware function.
     */
    getById(req, res, next) {
        const { id } = req.params;
        const resData = {};
        if (id) {
            this.objectModel.findById(new mongoose.Types.ObjectId(id)).then((object) => {
                resData[this.objectModel.name] = {
                    [object.id]: object.toObject(),
                };
                res.json(resData);
            }).catch(next);
        }
    }

    /**
     * Retrieves filtered objects based on the provided parameters.
     * Use this for ObjectController or EdgeController with GET method.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @param {Function} next - The next middleware function.
     */
    getFilter(req, res, next) {
        const params = req.params;
        const resData = {};
        // TODO: add convert params to query and queryId
        if (this.parentId) {
            this.objectModel.find(params).then((objects) => {
                objects.forEach((object) => {
                    const jsObject = object.toObject();
                    resData[this.objectModel.name] = {
                        [jsObject.id]: jsObject,
                    };
                });
                res.json(resData);
            }).catch(next);
        } else {
            this.edgeModel.findById(mongoose.Types.ObjectId(this.parentId)).then((edge) => {
                const jsEdge = edge.toObject();
                this.objectModel.find({ id: { $in: jsEdge.itemIds } }).then((objects) => {
                    objects.forEach((object, index) => {
                        const jsObject = object.toObject();
                        resData[this.objectModel.name] = {
                            [jsObject.id]: jsObject,
                        };
                        resData[this.edgeModel.name] = {
                            [jsEdge.id]: jsEdge.toObject(),
                        };
                        if (index === 0) {
                            resData[this.edgeModel.name].minScore = jsObject.createdTime;
                        } else if (index === objects.length - 1) {
                            resData[this.edgeModel.name].maxScore = jsObject.createdTime;
                        }
                    });
                    res.json(resData);
                }).catch(next);
            }).catch(next);
        }
    }
}

module.exports = BaseController;
