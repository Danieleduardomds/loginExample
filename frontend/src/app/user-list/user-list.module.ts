import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { EditUserListComponent } from './edit-user-list/edit-user-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [UserListComponent, EditUserListComponent],
  imports: [
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,   
    ReactiveFormsModule,
  ],
  //pesquisar sobre  esse campo
  bootstrap: [UserListComponent],
})
export class UserListModule {}
