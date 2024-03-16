const createModel = require('../modules/base/model/createModel');
const StoreConfig = require('../config/store/storeConfig');

const models = createModel(StoreConfig.job, {
    title: String, // Tiêu đề công việc
    levelId: String, // Mã mức độ quan trọng tìm nhân sự: gấp, cức gấp, bình thường, ...
    employerId: String, // Mã công ty/nhà tuyển dụng
    quantity: Number, // Số lượng cần tuyển
    methodId: String, // Mã phương thức làm việc
    probationTime: Number, // Thời gian thử việc
    salaryUnit: String, // Đơn vị tiền tệ cho lương
    salaryMin: Number, // Mức lương tối thiểu
    salaryMax: Number, // Mức lương tối đa
    applyStartTime: Number, // Thời gian bắt đầu nộp hồ sơ
    applyEndTime: Number, // Thời gian kết thúc nộp hồ sơ
    applyCount: Number, // Tổng số hồ sơ đã nộp
    ageMin: Number, // Độ tuổi tối thiểu
    ageMax: Number, // Độ tuổi tối đa
    experienceId: String, // Mã kinh nghiệm
    degreeId: String, // Mã trình độ học vấn
    genderId: String, // Mã giới tính
    description: String, // Mô tả công việc
    totalView: Number, // Tổng số lượt đã xem
});

module.exports = {
    JobModel: models.objectModel,
    HasJobModel: models.edgeModel,
};
