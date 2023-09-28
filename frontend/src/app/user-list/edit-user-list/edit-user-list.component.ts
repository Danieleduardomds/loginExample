import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
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
  public login: string | null = 'daiane@gmail.com';
  public password: string | null = '123344';
  @Output() onSave = new EventEmitter<any>();
  @Input() public loginOut: any;
  @Input() public passwordOut: any;
  @Input() public showCancel: any;

  constructor(
    public modalRef: BsModalRef,
    private serviceLogin: LoginService
  ) {}

  ngOnInit() {
    console.log('dentro do modal', this.userId, this.login, this.password);
    this.loginOut = this.login;
    this.passwordOut = this.password;
  }

  // ngOnDestroy() {
  //   this.onSave.emit(false);
  // }

  // public async openModal() {
  //   this.modalRef.content.show();
  //   return this.onSave;
  // }

  // public finishProcess(option:any) {
  //   this.modalRef.content.hide();
  //   this.onSave.emit(option)
  // }

  updateUser() {
    this.onSave.emit();
    this.modalRef.hide();
    // this.serviceLogin
    //   .updateUser(this.userId, this.login, this.password)
    //   .subscribe({
    //     next: () => {
    //       this.onSave.emit();
    //       this.modalRef.hide();
    //     },
    //     error: (error) => {
    //       console.error('Error when fetching data:', error);
    //     },
    //   });
  }
}
