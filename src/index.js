const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

// Xử lý đường dẫn hình ảnh
app.use(express.static(path.join(__dirname, 'public')));

// tạo middleware để lưu thông tin của form khi post lên server
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine: Giúp tạo các forder html gọn gàng hơn, chia thành các layouts nhỏ, dễ dàng quản lý các layout,
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Routes init
route(app);

app.listen(port);
