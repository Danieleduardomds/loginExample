import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  faFacebookF = faFacebookF;
  faXTwitter = faXTwitter;
  faLinkedin = faLinkedin;
  faGoogle = faGoogle;
  submitted = false;
  invalidEmail = false;
  invalidPassword = false;

  formConfirmLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  // Decorator
  @Input() public title: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log('sistema Inicializado');
    this.createForm();
  }

  ngOnChanges(): void {
    console.log('Alterado o valor do Propery-binging');
  }

  public createForm(): void {
    this.formConfirmLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(RX_EMAIL)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
         
        ],
      ],
    });
  }
 private checkForm(): void {

  const {email,password} =this.formConfirmLogin.controls;

   if(email.invalid){
    this.invalidEmail = true;
   }else{
    this.invalidEmail = false;
   }

   if(password.invalid){
    this.invalidPassword = true;
   }else{
    this.invalidPassword = false;
   }

 }

  public onSubmit() {
    this.checkForm();  
    console.log(this.formConfirmLogin.controls.email.value);
    console.log(this.email);
  }

  public reset() {
    this.invalidEmail = false;
    this.invalidPassword = false;
    this.formConfirmLogin.controls.email.setValue('');
    this.formConfirmLogin.controls.password.setValue('');
  }

  // Pega o que foi digitado no  formulario
  get getValueForm() {
    return this.formConfirmLogin.controls;
  }

  // salvar Valor que foi digitado
  set email(value: any) {
    this.formConfirmLogin.controls.email.setValue(value);
  }

//Pegar o valor salvo digitado 
  get email() {
    return this.formConfirmLogin.controls.email.value;
  }


  public login() {
    // alert('ola ' + this.email + ' tudo bem?');
    // console.log(this.email);
  }

  ngDoCheck(): void {
    //console.log(`ngDoCheck`);
  }

  ngAfterContentInit(): void {
    // console.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked(): void {
    //console.log(`ngAfterContentChecked`);
  }
  ngAfterViewInit(): void {
    console.log('Chamada realizada depois da  visualizacao da inicializacao');
  }

  ngAfterViewChecked(): void {
    //console.log(`ngAfterViewChecked`);
  }

  // ngOnDestroy(): void {
  //   alert(`Destruido o Componente com SUCESSO!`);
  // }
}
