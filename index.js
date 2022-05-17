const express = require('express');
const bodyParser = require('body-parser');
const app =express();


app.use(bodyParser.urlencoded({ extended: false }));

//setting up the views
app.set('view engine', 'ejs');
app.set('views', 'views');

//setting up routes
const registrationRoutes =require('./routes/registration');
const indexroutes = require('./routes/index');
//to handle 404 errors
const errorController =require('./controllers/error');

app.use('/register', registrationRoutes);
app.use(indexroutes);
app.use(errorController.get404);

app.listen(3001);