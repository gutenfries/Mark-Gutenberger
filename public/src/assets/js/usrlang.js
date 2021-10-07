const usrlang = globalObj.navigator.languages;
console.log(usrlang)

//////////////////


const usrlang = require('./public/en/assets/js/usrlang.js');
console.log(usrlang);


if (usrlang.includes('en')) {
    app.use(express.static(`${__dirname}/public/en`));

    app.use('/', indexRouter);
} else {
    app.use(express.static(`${__dirname}/public`));

    app.use('/', indexRouter);
};
app.use((req, res, next) => {
    res.status(404).render('404', { page: 'Page not found' });
});