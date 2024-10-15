require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path')
const {logger, logEvents} = require('./middlewares/logEvents')
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const verifyJWT = require('./middlewares/verifyJWT');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3600


//mongo
connectDB()

app.use(logger)
app.use(cors(corsOptions))

//handle url encoding
app.use(express.urlencoded({extended: false}))
//for json
app.use(express.json());
//middleware for cookies
app.use(cookieParser())
//serve a static files
app.use(express.static(path.join(__dirname, '/public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/', require('./routes/root'));
app.use('/admin', require('./routes/admin'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use('/blog', require('./routes/blog'));
app.use('/reader', require('./routes/reader'))
app.use('/user', require('./routes/api/user'));
app.use(verifyJWT);
app.use('/blog_mng', require('./routes/blog_mng'))
app.use('/editor', require('./routes/editor'));

//server a 404 page
app.get('/*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    }else if(req.accepts('json')){
        res.json({"error": "404 Not Found"});
    }else{
        res.type('txt').send('404 Not Found');
    }
});

//errorHandler
app.use(errorHandler)
mongoose.connection.once('open', () => {
    console.log('connected to mongoDB');
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
})