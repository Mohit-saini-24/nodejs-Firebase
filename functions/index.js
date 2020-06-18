const functions = require('firebase-functions');

const express = require('express');

const app = express();

const cors = require('cors')({origin : true});
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

app.use(cors);

app.engine('.ejs',require('ejs').__express);
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)

app.get('/', (req,res)=>{
    res.send('home/home');
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
})
app.get('/buy',(req,res) => {
    res.render('home/home');
    console.log('buy new product')
})
app.post('/home',(req,res)=>{
    var file = req.body.fileName.files;
    console.log(file[0].name);
    res.render('index');
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
