const mongoose = require('mongoose');
const roomSchema = mongoose.Schema({
    roomid:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type: String,
        required : true
    },
    maxCount:{
        type: Number,
        required : true
    },
    phoneNumber:{
        type: Number,
        required : true
    },  
    rentperday:{
        type: Number,
        required : true
    },
    imageurls:[],
    currentBookings : [],
    type:{
        type: String,
        required : true
    },
    description:{
        type: String,
        required : true
    },
},{
    timestamps : true,
})
const roomModel = mongoose.model('rooms', roomSchema)
module.exports  = roomModel;