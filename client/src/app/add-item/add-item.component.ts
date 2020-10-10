import { Component, OnInit } from '@angular/core';
import {ShareService} from '../sharedservices/share.service';
import {AuthService} from '../services/auth.service';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent implements OnInit {
  category;
  brand1;
  stock;
  price;
  sample=[
    {
      "itemname":"keyboard",
      "types":[
        {
          "brand":"zebronic",
          "price":250,
          "stock":10
        },
        {
          "brand":"iball",
          "price":350,
          "stock":10
        }
      ],
      "entirestock":20
    },
    {
      "itemname":"mouse",
      "types":[
        {
          "brand":"zebronic",
          "price":250,
          "stock":10
        },
        {
          "brand":"iball",
          "price":350,
          "stock":10
        }
      ],
      "entirestock":20
    }
  
  ];
  
delcategory;
delbrand;
delstock;
  newbrand;
  newcategory;
  items;
  brand=[];
  category1=[];  
  constructor(private shareservice:ShareService,private service:AuthService) { }

  ngOnInit(): void {
    this.items=this.shareservice.getItems();
    for(var i=0;i<this.items.length;i++){
      this.category1.push(this.items[i].itemname);
    }
  }

  setBrand(){
    if(this.brand.length>0)
    this.brand.splice(0);
    for(var i=0;i<this.items.length;i++){
      if(this.items[i].itemname==this.category){
        for(var j=0;j<this.items[i].types.length;j++){
          this.brand.push(this.items[i].types[j].brand);
        }
        break;
      }
    }
  }
  setBrand1(){
    if(this.brand.length>0)
    this.brand.splice(0);
    for(var i=0;i<this.items.length;i++){
      if(this.items[i].itemname==this.delcategory){
        for(var j=0;j<this.items[i].types.length;j++){
          this.brand.push(this.items[i].types[j].brand);
        }
        break;
      }
    }
  }
  onSubmit(){
    //console.log(this.category,this.brand1,this.stock,this.price);
    const item={
      itemname:this.category,
      brand:this.brand1,
      stock:this.stock,
      price:this.price
    }
    console.log(item);
    if(this.stock!=undefined){
    this.service.addItem(item);
    console.log("item posted",item.stock);
    }  
  }
  onSubmit1(){
    for(var i=0;i<this.items.length;i++){
      if(this.items[i].itemname==this.delcategory){
        for(var j=0;j<this.items[i].types.length;j++){
          if(this.items[i].types[j].brand==this.delbrand)
          this.delstock=this.items[i].types[j].stock;
        }
        break;
      }
    }
   const item={
     item:this.delcategory,
     brand:this.delbrand,
     stock:this.delstock
   }
   console.log(item);
   if(this.delbrand!=undefined || this.delbrand!=undefined){
     this.service.deleteItem(item);
     console.log("item deleted..");
   } 
  }
newCategory(){
  this.category1.push(this.newcategory);
}
newBrand(){
  this.brand.push(this.newbrand);
}
}
