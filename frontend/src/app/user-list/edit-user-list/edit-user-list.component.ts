import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RX_EMAIL } from 'src/app/shared/utils/regex';

@Component({
  selector: 'app-edit-user-list',
  templateUrl: './edit-user-list.component.html',
  styleUrls: ['./edit-user-list.component.scss'],
})
export class EditUserListComponent implements OnInit {
  public title: any;
  public invalidEmail = false;
  public invalidPassword = false;  
  public email: string | null = '';
  public password: string | null = '';
  public formEditUser = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  @Output() onSave = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, public modalRef: BsModalRef) {}

  ngOnInit() {
    this.createForm();
  }

  public createForm(): void {
    this.formEditUser = this.formBuilder.group({
      email: [this.email, [Validators.required, Validators.pattern(RX_EMAIL)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      ],
    });
  }

  public onSubmit() {
    this.email = this.formEditUser.controls.email.value;
    this.password = this.formEditUser.controls.password.value; 
    if (!this.email || !this.password) {
      alert('Enter email and password');
    } else {   
       this.checkForm();
    }
  }

  private checkForm(): void {
    const { email, password } = this.formEditUser.controls;
    if (email.invalid) {
      this.invalidEmail = true;
    } else {
      this.invalidEmail = false;
    }
    if (password.invalid) {
      this.invalidPassword = true;
    } else {
      this.invalidPassword = false;
    }

    if (!this.invalidEmail && !this.invalidPassword) {
      this.updateUser();
    }
  }

  updateUser() {
    this.onSave.emit();
    this.modalRef.hide();
  }
}
