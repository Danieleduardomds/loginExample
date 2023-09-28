import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-edit-user-list',
  templateUrl: './edit-user-list.component.html',
  styleUrls: ['./edit-user-list.component.scss'],
})
export class EditUserListComponent implements OnInit {
  public title: any;
  public userId: any;
  public login: any;
  public password: any;

  constructor(
    public modalRef: BsModalRef,
    private serviceLogin: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('dentro do modal', this.userId, this.login, this.password);
  }

  updateUser() {
    this.serviceLogin
      .updateUser(this.userId, this.login, this.password)
      .subscribe({
        next: () => {
          this.modalRef.hide();        
        },
        error: (error) => {
          console.error('Error when fetching data:', error);
        },
      });
  }
}
