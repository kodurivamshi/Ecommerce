import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Items} from '../models/items';
import {Types} from '../models/types';
import {ShareService} from '../sharedservices/share.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items;
  
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
          "stock":0
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
          "stock":1
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
      "itemname":"printer",
      "types":[
        {
          "brand":"HP",
          "price":2500,
          "stock":10
        },
        {
          "brand":"cannon",
          "price":3500,
          "stock":10
        }
      ],
      "entirestock":20
    },

  ];
  constructor(private service:AuthService,private shareService:ShareService) { }


toggle=true;
status="select";

  item:Items[]=new Array<Items>();
  onSelect(itemname1,brand1,stock1,price1){
    var type=new Types();
    var obj=new Items();
      console.log(itemname1,brand1,stock1,price1);

      console.log(this.item,typeof(this.item));
      if(this.item.length==0){
         obj.itemname=itemname1;
         type={
          brand:brand1,
          stock:stock1,
          price:price1,
          quantity:0,
          totalprice:0,
        }
         console.log("0");
        obj.types=new Array<Types>();
         obj.types.push(type);
         this.item.push(obj);
      }
      else{
        var f=0;
          for(var i=0;i<this.item.length;i++){
            if(this.item[i].itemname==itemname1){
              type={
                brand:brand1,
                stock:stock1,
                price:price1,
                quantity:0,
                totalprice:0,
              }
              console.log("for lo");
              this.item[i].types.push(type);
              f=1;
              break;
            }
          }
          if(f==0){
            console.log("1");
              obj.itemname=itemname1;
              type={
                brand:brand1,
                stock:stock1,
                price:price1,
                quantity:0,
                totalprice:0,
              }
       
             obj.types=new Array<Types>();
             obj.types.push(type);
              this.item.push(obj);
          }
      }
      console.log(this.item);
      this.shareService.setSharedItem(this.item);


     
  }
  
  ngOnInit(): void {
  this.service.getItems()
  .subscribe(item=>{this.items=item;this.shareService.setItems(item);});
  }

 

}
