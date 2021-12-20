import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import {LoginRegisterComponent} from "./components/login-register/login-register.component";


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginRegisterComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
