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
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public title: string = `Login Example`;

  constructor() {    
  }

  ngOnInit(): void {
    //console.log(`Start Component`);
  }
}
