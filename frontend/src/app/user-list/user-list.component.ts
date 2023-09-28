import { Component, OnInit } from '@angular/core';
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
  public email: string | null = 'eric@gmail.com';
  public password: string | null = '123344';

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
        userId: userId,
        login: this.email,
        password: this.password,
      },
      backdrop: 'static',
      class: 'modal-dialog-centered',
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
