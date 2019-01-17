
/**************************************************************************************

 @Purpose : Routing file for navigation between the components

 @Author  : Sheetal Chaudhari

 @Date    : 15/01/2019

***************************************************************************************/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//Routes is an object that contains path and component
const routes: Routes =
  [
    {
      path: '',
      component: LoginComponent
    },

    {
      path: 'registration',
      component: RegistrationComponent
    },

    {
      path: 'dashboard',
      component: DashboardComponent
    }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
