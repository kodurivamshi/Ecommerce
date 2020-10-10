import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {AddItemComponent} from './add-item/add-item.component';
import {BillComponent} from './bill/bill.component';
import {MembersComponent} from './members/members.component';
import {ReceiptComponent} from './receipt/receipt.component';

var  routes : Routes=[
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'addItem', component:AddItemComponent},
  {path:'bill',component:BillComponent},
  {path:'member',component:MembersComponent},
  {path:'receipt',component:ReceiptComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
 
}
