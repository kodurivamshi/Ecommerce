import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Items} from '../models/items';
import {Types} from '../models/types';
import {Customer} from '../models/customer';
import {ShareService} from '../sharedservices/share.service';
import {Member} from '../models/member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members;
  customer:Customer=new Customer();
  member:Member[]=new Array<Member>();
  //totalAmount=[];
 // i=0;
  constructor(private authservice:AuthService,private shareservice:ShareService) { }

  // increment(){
  //   this.i=this.i+1;
  //   //console.log(this.i);
  // }

  setMember(id){
    console.log(name);

    var item:Items[]=new Array<Items>();
    
    for(var i=0;i<this.members.length;i++){
      if(this.members[i]._id==id){
        this.customer.name=this.members[i].name;
        for(var j=0;j<this.members[i].items.length;j++){
          var obj=new Items();
          obj.types=new Array<Types>();
        obj.itemname=this.members[i].items[j].itemname;
      for(var k=0;k<this.members[i].items[j].types.length;k++){
        var type=new Types();
        type.brand=this.members[i].items[j].types[k].brand;
        type.price=this.members[i].items[j].types[k].price;
        type.quantity=this.members[i].items[j].types[k].quantity;
        type.totalprice=type.quantity*type.price;
        type.stock=0;
        obj.types.push(type);
      }
      item.push(obj);
    }
    this.customer.items=item;
    this.customer.date=this.members[i].date;
  }
      
    }
    this.shareservice.setCustomer(this.customer);
  }

  ngOnInit(): void {
    this.authservice.getMembers()
    .subscribe(member=>{console.log(member);this.members=member;});
    
   setTimeout(() => {
    for(var i=0;i<this.members.length;i++){
      var t=0;
      var m:Member=new Member();
      m.id=this.members[i]._id;
      m.sno=i+1;m.name=this.members[i].name;
      for(var j=0;j<this.members[i].items.length;j++){
        for(var k=0;k<this.members[i].items[j].types.length;k++){
          t=t+this.members[i].items[j].types[k].totalprice;
        }
      }
      var gst=(t*0.18);
      m.amount=t+gst;
      m.date=this.members[i].date;
      this.member.push(m);
    }
    console.log(this.member);
   }, 1000);
  }
  

}
