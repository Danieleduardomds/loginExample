import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-login></app-login>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  public title: string = `Login Example`;
  public valor: number = 1;
  public destruir: boolean = false;

  constructor() {
    //console.log(`Constructor`);
  }

  public adicionar(): number {
    return (this.valor += 1);
  }

  public destuirComponent() {
    this.destruir = true;
  }

  ngOnInit(): void {
    //console.log(`Start Component`);
  }
  ngDoCheck(): void {
    // console.log(`ngDoCheck`);
  }
  ngAfterContentInit(): void {
    // console.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked(): void {
    //console.log(`ngAfterContentChecked`);
  }
  ngAfterViewInit(): void {
    // console.log(`ngAfterViewInit`);
  }
  ngAfterViewChecked(): void {
    // console.log(`ngAfterViewChecked`);
  }
}
