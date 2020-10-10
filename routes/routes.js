const express=require("express");
const router=express.Router();
const itemModel=require("../models/items");
const memberModel=require("../models/members");
const path=require("path");

router.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });


router.get("/",(req,res)=>res.sendFile(path.join(__dirname+'public/index.html')));

//putting new item --with
router.post("/additem",(req,res)=>{
    var item=req.body.itemname;
    itemModel.findOne({itemname:item})
    .then(obj=>{
        if(obj){
            console.log(obj.itemname);
            console.log(obj.types);
            var f=0,stock;
            for(var i=0;i<obj.types.length;i++){
                if(obj.types[i].brand==req.body.brand){
                    f=1;
                    stock=obj.types[i].stock;
                    break;
                }
            }
            if(f==1){
                stock=stock+req.body.stock;
                itemModel.updateOne({"itemname":obj.itemname,"types.brand":req.body.brand},{"$set":{"types.$.stock":stock}},{safe:true},(err,result)=>{
                    if(err)console.log(err);
                    else
                    console.log(result);
                })
            }
            else{
            var item= {
                brand:req.body.brand,
                stock:req.body.stock,
                price:req.body.price
            };
            
            console.log(estock);
            itemModel.updateOne({"itemname":obj.itemname},{"$addToSet":{"types":item}},{safe:true},(err,result)=>{
                if(err)
                console.log("Not pushed into existing itemname..",err);
                else
                console.log("pushed into existing itemname",result);
            })
        }
        var estock=Number(obj.entirestock)+Number(req.body.stock);
            itemModel.update({"itemname":obj.itemname},{"$set":{"entirestock":estock}},{safe:true},(err,result)=>{
                if(err)
                console.log("error in updating the entirestock...",err);
                else
                console.log("entirestock updated successfully..");
            })
            return res.json(obj);
        
    }
        else{
            const item=new itemModel({
                itemname:req.body.itemname,
                types:[
                    {
                        brand:req.body.brand,
                        stock:req.body.stock,
                        price:req.body.price
                    }
                ],
                entirestock:req.body.stock
            })
            item.save()
            .then((data)=>{
                console.log("new item inserted..");
                return res.json(data);
            })
            .catch((err)=>console.log(err));
        }
    })
    
})
router.get("/allitems",(req,res)=>{
   
    itemModel.find()
    .then(items=>{
        console.log("All items",items);
        res.json(items);
    })
    .catch(err=>console.log("error in fectching all items",err));
})

router.post("/updatestock",(req,res)=>{
    console.log(req.body[0].types);
    item=req.body;
    itemModel.find()
    .then(items=>{
        for(var i=0,j=0;i<items.length && j<item.length;i++){
            if(items[i].itemname==item[j].itemname){
                for(var k=0,l=0;k<items[i].types.length && l<item[j].types.length;k++){
                        if(items[i].types[k].brand==item[j].types[l].brand){
                            var stock=items[i].types[k].stock-item[j].types[l].quantity;
                            console.log(stock);
                            if(stock<0){
                            stock=0;
                            }
                            itemModel.updateOne({"itemname":item[j].itemname,"types.brand":item[j].types[l].brand},{"$set":{"types.$.stock":stock}},{safe:true},(err,result)=>{
                                if(err)console.log(err);
                                else
                                console.log(result);
                            })
                            stock=items[i].entirestock-item[j].types[l].quantity;
                            itemModel.update({"itemname":item[j].itemname},{"$set":{"entirestock":stock}},{safe:true},(err,result)=>{
                                if(err)
                                console.log("error in updating the entirestock...",err);
                                else
                                console.log("entirestock updated successfully..");
                            })
                            l++;
                        }
                }
                j++;
            }
        }
    })
})
router.post("/delete",(req,res)=>{
    console.log(req.body.item,req.body.brand,req.body.stock);
    itemModel.updateOne({"itemname":req.body.item},{"$pull":{"types":{"brand":req.body.brand}}},{safe:true},(err,result)=>{
        if(err)
        console.log("while deleting",err);
        else{
            console.log("deleted");
            itemModel.find()
            .then(items=>{
                for(var i=0;i<items.length;i++){
                    if(items[i].itemname==req.body.item){
                        stock=items[i].entirestock-req.body.stock;
                            itemModel.update({"itemname":items[i].itemname},{"$set":{"entirestock":stock}},{safe:true},(err,result)=>{
                                if(err)
                                console.log("error in updating the entirestock...",err);
                                else
                                console.log("entirestock updated successfully..");
                            })
                    }
                }
            })
        }
    });
})
router.post("/addmember",(req,res)=>{
    console.log("Member",req.body.items[0]);
    const member=new memberModel(req.body);
    member.save()
    .then((data)=>{
        console.log("new member inserted..");
        return res.json(data);
    })
    .catch((err)=>console.log(err));
})
router.get("/member",(req,res)=>{
    memberModel.find()
    .then(members=>{
        console.log("All members",members);
        res.json(members);
    })
    .catch(err=>console.log("error in fectching all items",err));
})
module.exports=router;

