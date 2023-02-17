const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

//import router----
const OfferRouter = require('./api/router/offers')


// --mongoose-connection----
const mongoose = require('mongoose');
const url = 'mongodb+srv://cashdost01:7WbpaPpCygl1h2F2@cashdost.ymkfhvk.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('error', (error)=>{
    console.log('connection failed...')
});
mongoose.connection.on('connected', (connected)=>{
    console.log('connection successfuly...');
});
// --mongoose-connection----


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())


app.use(cors())


//router connection----
app.use('/offers', OfferRouter);



app.use((req, res)=>{
    try {
        res.status(200).json({
            message: 'app is running...'
        })
    } catch (error) {
        res.status(404).json({ 
            error: 'bad request...'
        })
    }
})


module.exports = app;


//mongodb+srv://cashdost01:7WbpaPpCygl1h2F2@cashdost.ymkfhvk.mongodb.net/?retryWrites=true&w=majority
//7WbpaPpCygl1h2F2