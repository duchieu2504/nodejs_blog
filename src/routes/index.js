const newsRouter = require('./news');
const siteRouter = require('./site');

const routes = (app) => {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);

    //get: dùng để lấy dữ liệu từ server về client,
    // * Khi submit: thông tin sẽ hiện lên url:
    // Post: dùng để gửi dữ liệu từ phía client đến server, đó là các dữ liệu cần bảo mật như dữ liệu người dùng, dữ liệu thông tin đăng nhập, và khi submit thông tin form sẽ không hiện lên url như get
};

module.exports = routes;
