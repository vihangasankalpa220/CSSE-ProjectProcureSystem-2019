const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")

var port = process.env.PORT || 5000

///Author : Vihanga

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
      extended: false
    })
)

//dummy route
const itemsRouter = require('./routes/dummyDataProvider');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





const mongoURI='mongodb://localhost:27017/procuresystem'

mongoose.connect(mongoURI,{useNewUrlParser:true})
    .then(()=>console.log("MongoDB Connected"))
    .catch(err=>console.log(err))


app.use('/data', itemsRouter);

const Orders = require('./routes/Orders');

app.use('/orders', Orders)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




app.listen(port, () => {
  console.log("Server is running on port: " + port)
})


module.exports = app;
