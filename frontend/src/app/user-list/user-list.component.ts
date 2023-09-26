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

  constructor(
    public dialog: MatDialog,
    public modalRef: BsModalRef,
    private modalService: BsModalService,
    private serviceLogin: LoginService
  ) {}

  ngOnInit(): void {
    this.loadDataTable();
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditUserListComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openModal() {
    this.modalRef = this.modalService.show(EditUserListComponent, {
      initialState: {
        title: 'DANIEL TESTE',  
        data: this.listUsers 
      },
    });
  }

  loadDataTable() {
    this.serviceLogin.LoadDataUsers().subscribe({
      next: (data) => {
        this.listUsers = data;
        console.log(`os usuarios sao:`, this.listUsers);
      },
      error: (error) => {
        console.error('Error when fetching data:', error);
      },
    });
  }
}
