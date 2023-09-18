import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule,FormsModule,ReactiveFormsModule,CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
