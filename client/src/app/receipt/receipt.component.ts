import { Component, OnInit } from '@angular/core';
import {ShareService} from '../sharedservices/share.service';
import {AuthService} from '../services/auth.service';
import {Customer} from '../models/customer';
import {Details} from '../models/details';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  gst;
  customer:Customer;
  details:Details[]=new Array<Details>();
  total=0;
  constructor(private shareservice:ShareService,private authservice:AuthService) { }

  ngOnInit(): void {
    this.customer=this.shareservice.getCustomer();
    var i=1;
    for(var j=0;j<this.customer.items.length;j++){
      var particular=this.customer.items[j].itemname;
             for(var k=0;k<this.customer.items[j].types.length;k++){
               var items=new Details();
               items.sno=i;
               items.item=particular;
               items.brand=this.customer.items[j].types[k].brand;
               items.quantity=this.customer.items[j].types[k].quantity;
               items.price=this.customer.items[j].types[k].price;
               items.amount=Number(items.quantity)*Number(items.price);
               this.total=this.total+Number(items.amount);
               this.details.push(items);
               i=i+1;
             }
          }
        this.gst=(this.total*0.18);
          this.total=this.total+this.gst;
  console.log(this.details);
        }
  
  onSubmit(){
   // this.authservice.addMember(this.customer);
    var p=document.getElementById("win");
    var WinPrint = window.open('', '', 'left=0,top=0,width=500,height=600,');
    WinPrint.document.write('<link href="./style.css">');
    WinPrint.document.write(p.innerHTML);
    
    
    WinPrint.document.close();
WinPrint.focus();
WinPrint.print();
//WinPrint.close();
   // window.print();
  }


}
