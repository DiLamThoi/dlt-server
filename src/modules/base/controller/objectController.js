const mongoose = require('mongoose');
const BaseResponse = require('./utils/BaseResponse');

const ALL_ID = 'all';

/**
 * Controller class for managing objects.
 */
class ObjectController {
    /**
     * Constructs a new ObjectController.
     * @param {mongoose.Model} objectModel - The object model.
     * @param {mongoose.Model} edgeModel - The edge model.
     * @param {Object} options - The options for the controller.
     */
    constructor(objectModel, edgeModel, options = {}) {
        this.objectModel = objectModel;
        this.edgeModel = edgeModel;
        // Handle options
        this.selectQuery = '';
        if (options.selectFields) this.selectQuery += options.selectFields.join(' ');
        if (options.blockedFields) this.selectQuery += '-' + options.blockedFields.join(' -');
        // Bind the methods to the class
        this.create = this.create.bind(this);
        this.getById = this.getById.bind(this);
        this.getFilter = this.getFilter.bind(this);
        this.getAll = this.getAll.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    /**
     * Create a new object in the database.
     * Use this with POST method.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @param {Function} next - The next middleware function.
     */
    create(req, res, next) {
        const Response = new BaseResponse(res);
        const { objectModel, edgeModel, selectQuery } = this;
        const { data } = req.body;
        const id = new mongoose.Types.ObjectId();
        const createdTime = new Date().getTime();
        objectModel.create({ ...data, id, createdTime }).then((object) => {
            const jsObject = object.toObject();
            Response._201(jsObject.id, createdTime);
        }).catch(next);
    }

    /**
     * Get an object by its ID.
     * use this with GET method.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @param {Function} next - The next middleware function.
     */
    getById(req, res, next) {
        const Response = new BaseResponse(res);
        const { objectModel, edgeModel, selectQuery } = this;
        const { id } = req.params;
        const resData = {};
        if (id) {
            objectModel.findOne({ id: new mongoose.Types.ObjectId(id) }).select(selectQuery).then((object) => {
                resData[objectModel.modelName] = {
                    [object.id]: object.toObject(),
                };
                Response._200WithData(resData);
            }).catch(next);
        }
    }

    /**
     * Retrieves filtered objects based on the provided parameters.
     * Use this with GET method.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @param {Function} next - The next middleware function.
     * @deprecated - This method is error-prone and should be replaced with a more robust solution.
     */
    getFilter(req, res, next) {
        const Response = new BaseResponse(res);
        const { objectModel, edgeModel, selectQuery } = this;
        const params = req.params;
        const resData = {};
        // TODO: add convert params to query and queryId
        objectModel.find(params).then((objects) => {
            const edgeData = {
                itemIds: [],
                items: [],
                total: objects.length,
                minScore: 0,
                maxScore: 0,
            };
            objects.forEach((object, index) => {
                const jsObject = object.toObject();
                edgeData.itemIds.push(jsObject.id);
                edgeData.items.push(jsObject);
                if (index === 0) edgeData.minScore = jsObject.createdTime;
                if (index === objects.length - 1) edgeData.maxScore = jsObject.createdTime;
            });
            resData[edgeModel.modelName] = { [ALL_ID]: edgeData };
            res.json(resData);
        }).catch(next);
    }

    /**
     * Retrieves all objects from the database.
     * Use this with GET method.
     * You can use getFilter method with params = {} to get all objects.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @param {Function} next - The next middleware function.
     */
    getAll(req, res, next) {
        const Response = new BaseResponse(res);
        const { objectModel, edgeModel, selectQuery } = this;
        const resData = {};
        objectModel.find({}).then((objects) => {
            const edgeData = {
                itemIds: [],
                items: [],
                total: objects.length,
                minScore: 0,
                maxScore: 0,
            };
            objects.forEach((object, index) => {
                const jsObject = object.toObject();
                edgeData.itemIds.push(jsObject.id);
                edgeData.items.push(jsObject);
                if (index === 0) edgeData.minScore = jsObject.createdTime;
                if (index === objects.length - 1) edgeData.maxScore = jsObject.createdTime;
            });
            resData[edgeModel.modelName] = { [ALL_ID]: edgeData };
            Response._200WithData(resData);
        }).catch(next);
    }
    
    /**
     * Updates an object by its ID from the database.
     * Use this with PUT method.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @param {Function} next - The next middleware function.
     */
    update(req, res, next) {
        const Response = new BaseResponse(res);
        const { objectModel, edgeModel, selectQuery } = this;
        const { id } = req.params;
        const { data } = req.body;
        const resData = {};
        if (id) {
            objectModel.findByIdAndUpdate(
                mongoose.Types.ObjectId(id),
                { $set: data },
                { new: true },
            ).then((object) => {
                Response._200();
            }).catch(next);
        }
    }

    /**
     * Deletes an object by its ID from the database.
     * Use this for ObjectController with DELETE method.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @param {Function} next - The next middleware function.
     */
    delete(req, res, next) {
        const Response = new BaseResponse(res);
        const { objectModel, edgeModel, selectQuery } = this;
        const { id } = req.params;
        if (id) {
            objectModel.findByIdAndDelete(mongoose.Types.ObjectId(id)).then((object) => {
                Response._200();
            }).catch(next);
        }
    }

}

module.exports = ObjectController;
