const mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const videoSchema = new mongoose.Schema(
    {
        videoUrl:{
            type:String,
            required:true,
        },
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        duration:{
            type:Number,
            required:true
        },
        tumbnail:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true,
            maxLength:40,
            trim:true
        },
        description:{
            type:String,
            required:true,
            trim:true
        },
        isPublish:{
            type:Boolean,
            default:true
        }
    },
    {timestamps:true});

videoSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Video", videoSchema)