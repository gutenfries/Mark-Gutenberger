"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const routes_1 = (0, tslib_1.__importDefault)(require("./public/routes"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT || 7000;
app.use(express_1.default.static(`${__dirname}/public`));
app.use('/', routes_1.default);
app.use((req, res, next) => {
    res.status(404).render('404', { page: 'Page not found' });
});
app.set('views', `${__dirname}/public/views`);
app.set('view engine', 'ejs');
app.listen(port, () => {
    console.log(`Server is listening at port ${port}.`);
});
//# sourceMappingURL=app.js.map