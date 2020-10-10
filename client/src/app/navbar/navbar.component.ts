import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog:MatDialog,) { }

  ngOnInit(): void {
  }

  openModal(){
    this.dialog.open(ModalComponent,{width:'1000px',height:'1000px'});
  }
  

}
