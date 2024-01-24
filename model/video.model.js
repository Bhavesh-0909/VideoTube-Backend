const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
    {
        videoUrl:{
            type:String,
            require:true,
        },
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        duration:{
            type:Number,
            required:true,
            
        }
    },
    {timestamps:true})