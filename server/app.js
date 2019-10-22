const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const errorHandler = require('errorhandler');
const mongoose = require('mongoose');

mongoose.promise = global.Promise;
// const ArticleRouter = require('./routes/api/articles');

const isProduction = process.env.NODE_ENV === 'production';

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if(!isProduction) {
    app.use(errorHandler());
}

mongoose.connect('mongodb://localhost/blog');
mongoose.set('debug', true);

app.get('/hey', (req, res) => res.send('ho!'))
//Add Models
// require('./models/Articles');
//Add Models
app.use(require('./routes'));
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
if (!isProduction) {
    app.use((err, req, res) => {
        res.status(err.status || 500);

        res.json({
            errors: {
                message: err.message,
                error: err,
            },
        });
    });
}

app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
        errors: {
            message: err.message,
            error: {},
        },
    });
});

const server = app.listen(PORT, () => console.log('Server started on http://localhost:'+PORT));

