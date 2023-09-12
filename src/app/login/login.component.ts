import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnChanges, OnDestroy {

  //  Ciclo de vida do Componente <3  
  // Decorator
  @Input() public title: any ;

  constructor() {}

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    console.log('Alterado com sucesso');        
  }

  ngOnDestroy(): void {
    alert(`Destruido o Componente com SUCESSO!`);
  }
}
