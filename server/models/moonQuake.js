const mongoose = require('mongoose');

const moonQuakes= new mongoose.Schema({
    year:{
        type:String,
        required:true
    },
    day:{
        type:String,
        required:true
    },
    hour:{
        type:String,
        required:true
    },
    minute:{
        type:String,
        required:true
    },
    seconds:{
        type:String,
        required:true
    },
    latitude:{
        type:Number,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    },
    magnitude:{
        type:Number,
        required:true
    },
    station:{
        type:Array,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('MoonQuake',moonQuakes);