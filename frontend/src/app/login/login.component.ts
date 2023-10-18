import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  faFacebookF,
  faLinkedin,
  faGoogle,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { RX_EMAIL, RX_PASSWORD } from '../shared/utils/regex';
import { LoginService } from '../shared/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public faFacebookF = faFacebookF;
  public faXTwitter = faXTwitter;
  public faLinkedin = faLinkedin;
  public faGoogle = faGoogle;
  public submitted = false;
  public invalidEmail = false;
  public invalidPassword = false;
  public token: any;
  public email: string | null = '';
  public password: string | null = '';

  public formConfirmLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  // Decorator
  @Input() public title: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    protected serviceLogin: LoginService
  ) {}

  ngOnInit(): void {
    localStorage.clear();
    this.createForm();
  }

  validateLogin() {
    this.serviceLogin.validateLogin(this.email, this.password).subscribe({
      next: (data) => {
        this.token = data.token;
        localStorage.setItem('token', data.token);        
        this.checkForm();
      },
      error: (error) => {
        console.error('Error when fetching data:', error);
      },
    });
  }

  public createForm(): void {
    this.formConfirmLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(RX_EMAIL)]],
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

  private checkForm(): void {
    const { email, password } = this.formConfirmLogin.controls;
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
      this.login();
    }
  }

  public onSubmit() {
    this.email = this.formConfirmLogin.controls.email.value;
    this.password = this.formConfirmLogin.controls.password.value;
    if (!this.email || !this.password) {
      alert('Enter email and password');
    } else {
      this.validateLogin();
    }
  }

  public reset() {
    this.invalidEmail = false;
    this.invalidPassword = false;
    this.formConfirmLogin.controls.email.setValue('');
    this.formConfirmLogin.controls.password.setValue('');
  }

  public login() {
    if (!this.token) {
      this.invalidEmail = true;
      this.invalidPassword = true;
    } else {
      this.router.navigateByUrl('/userList');
    }
  }
}
