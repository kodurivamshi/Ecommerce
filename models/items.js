const mongoose=require("mongoose");
const subschema=new mongoose.Schema({
    brand:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const schema=new mongoose.Schema({
    itemname:{
        type:String,
        required:true
    },
    types:[
        subschema
    ],
    entirestock:{
        type:Number,
        required:true
    }
})



module.exports=mongoose.model('Items',schema);