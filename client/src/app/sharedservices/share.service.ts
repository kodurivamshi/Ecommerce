import { Injectable } from '@angular/core';
import {Items} from '../models/items';
import {Customer} from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  items;
  sharedItems:Items[];
  customer:Customer;
 // sharedCustomer:Customer;
  constructor() { }
  
  setItems(items){
    this.items=items;
  }
  getItems(){
    return this.items;
  }

  setCustomer(customer:Customer){
   this.customer=customer;
  }
  getCustomer(){
  //  this.sharedCustomer=null;
    return this.customer;
  }

  setSharedItem(items:Items[]){
    this.sharedItems=items;
  }
  getSharedItem(){
    return this.sharedItems;
  }

//   setSharedmember(customer:Customer){
//     this.sharedCustomer=customer;
//   }

//   getSharedmember(){
// //    this.customer=null;
//     console.log(this.sharedCustomer);
//     return this.sharedCustomer;
//   }
 
}
