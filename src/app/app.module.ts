
/**************************************************************************************

 @Purpose : Root file to describe how the application parts fit together using @NgModule

 @Author  : Sheetal Chaudhari

 @Date    : 15/01/2019

***************************************************************************************/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material';
import { MatIconModule } from "@angular/material/icon";





@NgModule({
declarations: [
AppComponent,
LoginComponent,
RegistrationComponent,
DashboardComponent
],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule,
HttpClientModule,
BrowserAnimationsModule,
MatButtonModule,
MatCheckboxModule,
MatFormFieldModule,
ReactiveFormsModule,
MatInputModule,
MatIconModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
