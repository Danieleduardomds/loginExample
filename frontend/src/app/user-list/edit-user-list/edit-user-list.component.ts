import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-user-list',
  templateUrl: './edit-user-list.component.html',
  styleUrls: ['./edit-user-list.component.scss']
})
export class EditUserListComponent implements OnInit {

  public title:any;
  public data:any;

  constructor (public modalRef: BsModalRef){}

  ngOnInit(){
   console.log('dentro do modal',this.data);   
  }

}
