const mongoose=require("mongoose");

const subschema1=new mongoose.Schema({
    brand:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    totalprice:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
    }
})

const subschema=new mongoose.Schema({
    itemname:{
        type:String,
        required:true
    },
    types:[
        subschema1
    ],
})

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    items:[
        subschema
    ],
    date:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Members",schema);