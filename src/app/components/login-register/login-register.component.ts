import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    (<HTMLButtonElement>document.getElementById('signUp')).addEventListener('click', () => {
      (<HTMLAreaElement>document.getElementById('container')).classList.add('right-panel-active')
    });

    (<HTMLButtonElement>document.getElementById('signIn')).addEventListener('click', () => {
      (<HTMLAreaElement>document.getElementById('container')).classList.remove('right-panel-active')
    });
  }
}
