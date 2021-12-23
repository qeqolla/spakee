import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import {LoginRegisterComponent} from "./components/login-register/login-register.component";
import { PasswordPageComponent } from './components/password-page/password-page.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginRegisterComponent },
  { path: 'passwords', component: PasswordPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
