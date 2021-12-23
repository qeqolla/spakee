import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {PassgenpartComponent} from './components/passgenpart/passgenpart.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {InfoComponent} from './components/info/info.component';
import {AdvantagesComponent} from './components/advantages/advantages.component';
import {MainSectionComponent} from './components/main-section/main-section.component';
import {PasswordPartComponent} from './components/password-part/password-part.component';
import {TextPartComponent} from './components/text-part/text-part.component';
import {AboutComponent} from './components/info/about/about.component'

import {LoginRegisterComponent} from './components/login-register/login-register.component';
import {MainComponent} from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    PassgenpartComponent,
    HeaderComponent,
    FooterComponent,
    InfoComponent,
    AdvantagesComponent,
    AboutComponent,
    MainSectionComponent,
    PasswordPartComponent,
    TextPartComponent,
    LoginRegisterComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
