import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';


import {ShareService} from './sharedservices/share.service';
import {AppHttpService} from './services/app-http.service';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { AddItemComponent } from './add-item/add-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BillComponent } from './bill/bill.component';
import { MembersComponent } from './members/members.component';
import { ReceiptComponent } from './receipt/receipt.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    AddItemComponent,
    NavbarComponent,
    BillComponent,
    MembersComponent,
    ReceiptComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  entryComponents:[
    ModalComponent,
  ],
  providers: [
    AppHttpService,
    AuthService,
    ShareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
