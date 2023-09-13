import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import {
  faFacebookF,
  faLinkedin,
  faGoogle,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

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

  email = '';
  password = '';

  //  Ciclo de vida do Componente <3
  // Decorator
  @Input() public title: any;

  constructor() {}

  ngOnInit(): void {
    console.log('sistema Inicializado');   
  }

  public login() {
    alert('ola ' + this.email + ' tudo bem?');
    console.log(this.email);
  }

  ngOnChanges(): void {
    console.log('Alterado o valor do Propery-binging');
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
