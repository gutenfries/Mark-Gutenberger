"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    res.render('index', { page: 'Home' });
});
router.get('/home', (req, res, next) => {
    res.render('index', { page: 'Home' });
});
router.get('/about', (req, res, next) => {
    res.render('index', { page: 'About' });
});
router.get('/contact-me', (req, res, next) => {
    res.render('index', { page: 'Contact Me' });
});
router.get('/LICENSE', (req, res, next) => {
    res.render('LICENSE', { page: 'LICENSE' });
});
router.get('/nav', (req, res, next) => {
    res.render('nav', { page: 'nav' });
});
exports.default = router;
//# sourceMappingURL=index.js.map