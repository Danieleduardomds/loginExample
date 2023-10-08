import { Component,OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../shared/service/login.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EditUserListComponent } from './edit-user-list/edit-user-list.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ListUsers } from '../shared/models/list-users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit { 
  listUsers: ListUsers[] = []; 
  // daniel: Array<ListUsers> = []; 
  idUser: any;
  loginModal: any;
  passwordModal: any;


  constructor(      
    public dialog: MatDialog,
    public modalRef: BsModalRef,
    private modalService: BsModalService,
    private serviceLogin: LoginService
  ) {}

  ngOnInit(): void {
    this.loadDataTable();
  }

  openModal(listUser: ListUsers) {
    this.idUser = listUser.id;
    this.modalRef = this.modalService.show(EditUserListComponent, {
      initialState: {
        title: 'Edit User',
        email: listUser.login,
      },
      backdrop: 'static',
      class: 'modal-dialog-centered',
    });
    this.modalRef.content.onSave.subscribe(() => {
      this.loginModal = this.modalRef.content.email;
      this.passwordModal = this.modalRef.content.password;
      this.updateUser();
    });
  }

  updateUser() {
    this.serviceLogin
      .updateUser(this.idUser, this.loginModal, this.passwordModal)
      .subscribe({
        next: () => {
          this.loadDataTable();
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
