const mongoose = require('mongoose')

const offerSchema = new mongoose.Schema({
    Company_offer:{
        type: String,
        require: true
    },
    Company_paragraph:{
        type: String,
        require: true
    },
    Company_logo:{
        type: String,
        require: true
    },
    paragraph:{
        type: String,
        require: true
    },
    self_offer:{
        type: String,
        require: true
    },
    redirect_link:{
        type: String,
        require: true
    },
})


module.exports = mongoose.model('offers', offerSchema);