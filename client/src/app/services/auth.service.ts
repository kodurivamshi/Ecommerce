import { Injectable } from '@angular/core';
import {AppHttpService} from './app-http.service';
import { Items } from '../models/items';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:AppHttpService) { }

  getItems(){
    return this.httpService.get('/allitems');
  }

  putStock(items:Items[]){
    console.log(items,"in service sending tohttp serivce");
    return this.httpService.putStock('/updateStock',items);
  }

  addItem(item){
    return this.httpService.addItem('/additem',item);
  }

  deleteItem(item){
    return this.httpService.deleteItem('/delete',item);
  }

  addMember(customer){
    return this.httpService.addMember('/addmember',customer);
  }

  getMembers(){
    return this.httpService.getMember('/member');
  }
}
