const mongoose = require('mongoose');
const StoreConfig = require('../store/storeConfig');

const { ObjectId } = mongoose.Types;

const initialData = {
    [StoreConfig.method]: [
        { id: new ObjectId(), name: 'Toàn thời gian cố định' },
        { id: new ObjectId(), name: 'Toàn thời gian tạm thời' },
        { id: new ObjectId(), name: 'Bán thời gian cố định' },
        { id: new ObjectId(), name: 'Bán thời gian cố định' },
        { id: new ObjectId(), name: 'Theo hợp đồng' },
        { id: new ObjectId(), name: 'Thực tập' },
        { id: new ObjectId(), name: 'Khác' },
    ],
    [StoreConfig.degree]: [
        { id: new ObjectId(), name: 'Không yêu cầu' },
        { id: new ObjectId(), name: 'Chứng chỉ' },
        { id: new ObjectId(), name: 'Trung học' },
        { id: new ObjectId(), name: 'Trung cấp' },
        { id: new ObjectId(), name: 'Cao đẳng' },
        { id: new ObjectId(), name: 'Đại học' },
        { id: new ObjectId(), name: 'Trên đại học' },
    ],
    [StoreConfig.experience]: [
        { id: new ObjectId(), name: 'Chưa có kinh nghiệm' },
        { id: new ObjectId(), name: 'Dưới 1 năm' },
        { id: new ObjectId(), name: '1 năm' },
        { id: new ObjectId(), name: '2 năm' },
        { id: new ObjectId(), name: '3 năm' },
        { id: new ObjectId(), name: '4 năm' },
        { id: new ObjectId(), name: '5 năm' },
        { id: new ObjectId(), name: 'Trên 5 năm' },
    ],
    [StoreConfig.gender]: [
        { id: new ObjectId(), name: 'Không yêu cầu', value: 0 },
        { id: new ObjectId(), name: 'Nam', value: 1 },
        { id: new ObjectId(), name: 'Nữ', value: -1 },
    ],
};

module.exports = initialData;