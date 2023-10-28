module.exports = {
    env: {
        node: true,
        es6: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        'no-console': 'warn',  // Không cho phép sử dụng console.log
        'no-unused-vars': 'off',  // Cảnh báo về biến không sử dụng
        'no-undef': 'error',  // Báo lỗi khi sử dụng biến chưa được định nghĩa
        'semi': ['error', 'always'],  // Yêu cầu dấu chấm phẩy sau mỗi lệnh
        'quotes': ['error', 'single'],  // Yêu cầu sử dụng dấu nháy đơn
        'indent': ['error', 4],  // Thụt đầu dòng 2 khoảng trắng
        'object-curly-spacing': ['error', 'always'],  // Yêu cầu sử dụng khoảng trắng trong đối tượng và đối số hàm
        'arrow-spacing': 'error',  // Kiểm tra và đảm bảo khoảng trắng trước và sau mũi tên trong hàm mũi tên
        'prefer-const': 'error',  // Khuyến nghị sử dụng const thay vì let khi biến không cần thay đổi
        'no-multiple-empty-lines': 'warn',  // Cảnh báo về việc sử dụng quá nhiều dòng trống liên tiếp
        'max-len': ['warn', { 'code': 120, 'tabWidth': 2 }],  // Giới hạn độ dài của dòng mã
        'object-shorthand': 'error',  // Khuyến nghị sử dụng cú pháp rút gọn cho thuộc tính đối tượng
        'no-unused-expressions': 'error',  // Báo lỗi khi có biểu thức không được sử dụng trong lệnh hoặc khai báo
        'no-var': 'error',  // Yêu cầu không sử dụng `var`, sử dụng `let` hoặc `const` thay thế
    },
    
};
  