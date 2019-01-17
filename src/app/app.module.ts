
/**************************************************************************************

 @Purpose : Root file to describe how the application parts fit together using @NgModule

 @Author  : Sheetal Chaudhari

 @Date    : 15/01/2019

***************************************************************************************/

import { BrowserModule } from '@angular/platform-browser';//the BrowserModule that this and every application needs to run in a browser.
import { NgModule } from '@angular/core';// NgModule Angular service

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  // NgModule decorator groups services, components, pipes and directives
  declarations:
    [
      AppComponent,

      RegistrationComponent,

      LoginComponent,

      DashboardComponent
    ],
    
  //Add a module to the imports array when the application requires its features.
  imports:
    [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
    ],

  // To make your service globally available register in the providers array
  providers: [],

  //An angular Bootstrap array is required for starting the execution of the main app.
  bootstrap: [AppComponent]// the root component that Angular creates and inserts into the index.html host web page.
})
export class AppModule { }
