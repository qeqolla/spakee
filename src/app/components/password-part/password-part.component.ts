import {Component, OnInit} from '@angular/core';

interface Parameters {
  isChecked: boolean;
  expression: RegExp;
  valid: boolean;
  symbols: string;
}

declare let $: any;

@Component({
  selector: 'app-password-part',
  templateUrl: './password-part.component.html',
  styleUrls: ['./password-part.component.css'],
})
export class PasswordPartComponent implements OnInit {
  settings: { [id: string]: Parameters } = {};
  passwordLength: number = Math.floor(Math.random() * 15) + 15;
  password!: string;
  generatedPassword!: string;

  constructor() {
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
  }

  check() {
    Object.entries(this.settings).forEach(([name, param]) => {
      if (param.isChecked) {
        param.valid = param.expression.test(this.password);
        console.log(this.password)
      } else {
        param.valid = true;
      }
    });
  }

  checkGeneratedPassword(pass: string) {
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
      console.log(result);
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
