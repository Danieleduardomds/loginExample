import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../shared/service/login.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EditUserListComponent } from './edit-user-list/edit-user-list.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public listUsers: any;
  // @ViewChild(EditUserListComponent) modal : any;
  idUserModal: any;
  loginModal: any;
  passwordModal: any;
  // showCancelModal = true;

  constructor(
    public dialog: MatDialog,
    public modalRef: BsModalRef,
    private modalService: BsModalService,
    private serviceLogin: LoginService
  ) {}

  ngOnInit(): void {
    this.loadDataTable();
  }

  openModal(userId: any) {
    this.modalRef = this.modalService.show(EditUserListComponent, {
      initialState: {
        title: 'DANIEL TESTE',
        userId: userId
      },
      backdrop: 'static',
      class: 'modal-dialog-centered',
    });
    this.modalRef.content.onSave.subscribe(()=>{
      this.idUserModal = this.modalRef.content.userId;
      this.loginModal = this.modalRef.content.loginOut;
      this.passwordModal = this.modalRef.content.passwordOut;
      console.log(`valor que vem do modal`, this.idUserModal,this.loginModal,this.passwordModal);
      this.updateUser();
    })
  }

  //  public async openModal() {
  //      this.loginModal =  '';
  //      this.passwordModal = '';
  //      const openModal = await this.modalRef.content.openModal();
  //      const finishProcess =  openModal.subscribe(res => {
  //       if(res){
  //         console.log(`update`);
          
  //       }
  //      });
  //  }

  updateUser(){
    this.serviceLogin
      .updateUser(this.idUserModal, this.loginModal, this.passwordModal)
      .subscribe({
        next: () => {
          this.loadDataTable();
          // this.onSave.emit();
          // this.modalRef.hide();
        },
        error: (error) => {
          console.error('Error when fetching data:', error);
        },
      });
  }

  loadDataTable() {
     
    this.serviceLogin.LoadDataUsers().subscribe({
      next: (data) => {
        this.listUsers = data;
      },
      error: (error) => {
        console.error('Error when fetching data:', error);
      },
    });
  }

  deleteUser(id: any) { 
    this.serviceLogin.deleteUser(id).subscribe({
      next: () => {   
        this.loadDataTable();   
      },
      error: (error) => {
        console.error('Error when fetching data:', error);
      },
    });
  }  
}
