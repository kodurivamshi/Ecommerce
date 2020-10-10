import { Component, OnInit } from '@angular/core';
import {ShareService} from '../sharedservices/share.service';
import {Items} from '../models/items';
import {Types} from '../models/types';
import {Customer} from '../models/customer';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit 
  {
    name;
  total:number;
  items:Items[];
  customer:Customer=new Customer();
  constructor(private shareservice:ShareService,private authservice:AuthService,public dialogRef:MatDialogRef<ModalComponent>) { }

  ngOnInit(): void {
    this.items=this.shareservice.getSharedItem();
  }
  onSubmit(){
    console.log("submitted to backend",this.name,this.items[0]);
    this.customer.name=this.name;
    this.customer.items=this.setItems();
    var d=new Date();
    var m=d.getMonth()+1;
    this.customer.date=d.getDate()+"-"+m+"-"+d.getFullYear();
    this.shareservice.setCustomer(this.customer);
    console.log(this.shareservice.getCustomer());
    this.authservice.putStock(this.items);
    this.dialogRef.close();
    this.items.splice(0,this.items.length);
  }
  setItems(){
    var item:Items[]=new Array<Items>();
    for(var i=0;i<this.items.length;i++){
      var obj=new Items();
    obj.types=new Array<Types>();
      obj.itemname=this.items[i].itemname;
      for(var j=0;j<this.items[i].types.length;j++){
        var type=new Types();
        type.brand=this.items[i].types[j].brand;
        type.price=this.items[i].types[j].price;
        type.quantity=this.items[i].types[j].quantity;
        type.totalprice=type.quantity*type.price;
        type.stock=0;
        obj.types.push(type);
      }
      item.push(obj);
    }
    return item;
  }
  onRemove(item,brand){
      for(var i=0;i<this.items.length;i++){
        if(this.items[i].itemname==item){
          for(var j=0;j<this.items[i].types.length;j++){
            if(this.items[i].types[j].brand==brand){
              this.total=this.total-(this.items[i].types[j].price*this.items[i].types[j].quantity);
              this.items[i].types.splice(j,1);
              if(this.items[i].types.length==0){
                this.items.splice(i,1);
              }
              break;
            }
          }
        }
      }
  }
  totalprice(){
   this.total=0;
    for(var i=0;i<this.items.length;i++){
      for(var j=0;j<this.items[i].types.length;j++){
        this.total=this.total+(this.items[i].types[j].price*this.items[i].types[j].quantity);
      }
    }
  }
}
