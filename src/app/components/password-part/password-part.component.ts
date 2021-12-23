import {Component, OnInit} from '@angular/core';
import {sha1} from "../../system/classes/sha-converter";
import "js-sha1"
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IParameters} from "../../system/interfaces/parameters";

declare let $: any;

@Component({
  selector: 'app-password-part',
  templateUrl: './password-part.component.html',
  styleUrls: ['./password-part.component.css'],
})
export class PasswordPartComponent implements OnInit {
  settings: { [id: string]: IParameters } = {};
  passwordLength: number = Math.floor(Math.random() * 15) + 15;
  password!: string;
  generatedPassword!: string;
  private password_url = environment.PASSWORD_URL
  private security!: HTMLAreaElement

  constructor(private http: HttpClient) {
    this.password = '';
    this.generatedPassword = '';
    this.settings['uppercase'] = {
      isChecked: false,
      valid: true,
      expression: /[A-Z]+/,
      symbols: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    };
    this.settings['lowercase'] = {
      isChecked: false,
      valid: true,
      expression: /[a-z]+/,
      symbols: 'abcdefghijklmnopqrstuvwxyz',
    };
    this.settings['numbers'] = {
      isChecked: false,
      valid: true,
      expression: /[0-9]+/,
      symbols: '0123456789',
    };
    this.settings['extra'] = {
      isChecked: false,
      valid: true,
      expression: /[\!\@\#\$]+/,
      symbols: '!@#$',
    };
  }

  ngOnInit(): void {
    this.security = <HTMLAreaElement>document.querySelector(".security")
  }

  private parsePwndPasswords(data: string, encryptedPassword: string) {
    let passwords = data.split(/\s+/)

    let isPwnd = false

    passwords.forEach(password => {
      if (password.toLowerCase().includes(encryptedPassword.slice(5))) {
        let pwndCount = password.split(':')[1]
        isPwnd = true
        this.security.innerHTML = `<span>Ваш пароль ненадійний. Зустрічається ${pwndCount} разів!</span>`
      }
    })

    if (!isPwnd) {
      this.security.innerHTML = `<span>Ваш пароль надійний!</span>`
    }
  }

  check() {
    let hashedPassword = sha1(this.password)

    this.security.innerHTML = ''

    this.http.get(`${this.password_url}${hashedPassword.slice(0, 5)}`, {responseType: 'text'})
      .subscribe(
        data => this.parsePwndPasswords(data, hashedPassword),
        error => console.log(error)
      )
  }

  checkGeneratedPassword(pass: string) {
    this.security.innerHTML = ''
    try {
      Object.entries(this.settings).forEach(([name, param]) => {
        if (param.isChecked) {
          if (!param.expression.test(pass)) {
            throw 'unvalid';
          }
        }
      });
    } catch (e) {
      return false;
    }
    return true;
  }

  generate() {
    let characters = '';
    let validPassword = false;
    Object.entries(this.settings).forEach(([name, param]) => {
      if (param.isChecked) {
        characters += param.symbols;
        param.valid = true;
      }
    });
    const charactersLength = characters.length;
    while (!validPassword) {
      let result = ' ';
      for (let i = 0; i < this.passwordLength; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      // console.log(result);
      validPassword = this.checkGeneratedPassword(result);
      this.generatedPassword = result;
      this.password = result;
    }
  }

  onSubmit() {
    alert(`, ${this.password}`);
    return;
  }
}
