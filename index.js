const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
require('dotenv').config()
const app =express();


app.use(bodyParser.urlencoded({ extended: false }));
//middelware for file handleing files

const fileStorage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, './utils/CVs');
    },
    filename: (req, file, cb)=>{
        
        UniqefileName =new Date().toISOString().replace(/:/g, ' ')+'_' + file.originalname;
        req.UniqefileName = UniqefileName;
        cb(null,UniqefileName);
    }
})
app.use(multer({storage: fileStorage}).single("q6"));
//setting up the views
app.set('view engine', 'ejs');
app.set('views', 'views');

//setting up routes
const registrationRoutes =require('./routes/registration');
const indexroutes = require('./routes/index');
//to handle 404 errors
const errorController =require('./controllers/error');
const { file } = require('googleapis/build/src/apis/file');
const res = require('express/lib/response');

app.use('/register', registrationRoutes);
app.use(indexroutes);
app.use(errorController.get404);

app.listen(3001);