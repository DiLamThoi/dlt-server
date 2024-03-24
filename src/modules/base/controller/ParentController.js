const mongoose = require('mongoose');
const BaseResponse = require('./utils/BaseResponse');

const ALL_ID = 'all';

/**
 * Controller class for managing objects.
 */
class ParentController {
    /**
     * Constructs a new ObjectController.
     * @param {mongoose.Model} objectModel - The object model.
     * @param {mongoose.Model} edgeModel - The edge model.
     * @param {string} parentId - The parent ID which ID in the edge model.
     * @param {Object} options - The options for the controller.
     */
    constructor(objectModel, edgeModel, parentId, options = {}) {
        this.objectModel = objectModel;
        this.edgeModel = edgeModel;
        this.parentId = parentId;
        // Handle options
        this.selectQuery = '';
        if (options.selectFields) this.selectQuery += options.selectFields.join(' ');
        if (options.blockedFields) this.selectQuery += '-' + options.blockedFields.join(' -');
        // Bind the methods to the class
        this.getFilter = this.getFilter.bind(this);
        this.getAll = this.getAll.bind(this);
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
        const { objectModel, edgeModel, parentId, selectQuery } = this;
        const params = req.params;
        const resData = {};
        // TODO: add convert params to query and queryId
        edgeModel.findById(mongoose.Types.ObjectId(parentId)).then((edge) => {
            const jsEdge = edge.toObject();
            objectModel.find({ id: { $in: jsEdge.itemIds }, ...params }).then((objects) => {
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
                    else if (index === objects.length - 1) edgeData.maxScore = jsObject.createdTime;
                });
                resData[edgeModel.modelName] = { [parentId]: edgeData };
                Response._200WithData(resData);
            }).catch(next);
        }).catch(next);
    }

    /**
     * Retrieves all objects from the database.
     * Use this for ObjectController or ParentController with GET method.
     * You can use getFilter method with params = {} to get all objects.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @param {Function} next - The next middleware function.
     */
    getAll(req, res, next) {
        const Response = new BaseResponse(res);
        const { objectModel, edgeModel, parentId, selectQuery } = this;
        const resData = {};
        edgeModel.findById(mongoose.Types.ObjectId(parentId)).then((edge) => {
            const jsEdge = edge.toObject();
            resData[edgeModel.modelName] = { [parentId]: jsEdge };
            Response._200WithData(resData);
        }).catch(next);
    }
}

module.exports = ParentController;
