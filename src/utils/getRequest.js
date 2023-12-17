const _ = require('lodash');

const getObjectDocRequest = (docs, keys) => {
    const rs = {};
    docs.forEach((doc) => {
        const docObject = doc.toObject();
        const { id } = docObject;
        if (!id) console.log('Error::getObjectDocRequest docObject does not exist');
        else {
            const docRequest = keys ? _.pick(docObject, keys) : docObject;
            _.assign(rs, { [id]: docRequest });
        }
    });
    return rs;
};

const getEdgeDocRequest = (docs, parentId = '-1') => {
    const ids = [];
    docs.forEach((doc) => {
        const docObject = doc.toObject();
        const { id } = docObject;
        if (!id) console.log('Error::getEdgeDocRequest docObject does not exist');
        else ids.push(id);
    });
    return { [parentId]: ids };
};

module.exports = {
    getObjectDocRequest,
    getEdgeDocRequest
};
