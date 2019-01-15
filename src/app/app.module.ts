import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';// NgModule Angular service

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  // NgModule decorator groups services, components, pipes and directives
  declarations: 
  [
    // Angular CLI registers components in the declarations array by default
    AppComponent,
   
    RegistrationComponent,
   
    LoginComponent,
   
    DashboardComponent
  ],
  imports: 
  [
    // Register all the modules in the imports array
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  // To make your service globally available register in the providers array
  providers: [],

  //An angular Bootstrap array is required for starting the execution of the main app.
  bootstrap: [AppComponent]
})
export class AppModule { }
