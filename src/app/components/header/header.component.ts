import {AfterViewInit, Component, OnInit} from '@angular/core';

import { Generator } from "../../system/classes/generator";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  isInSystem = false

  constructor() {
  }

  ngOnInit(): void {
  }

  public generatePassword() {
    console.log(new Generator(true, true, true, true).generatePassword())
  }


  // поміняти по можливості
  toTop() {
    // let scrollToTop = window.setInterval(() => {
    //   let pos = window.pageYOffset;
    //   if (pos > 0) {
    //     window.scrollTo(0, pos - 50); // how far to scroll on each step
    //   } else {
    //     window.clearInterval(scrollToTop);
    //   }
    // }, 15);
    let top = document.getElementById('top')
    console.log(top)
    if(top !== null) {
      top.scrollIntoView();
      console.log('qqq')
    }
  }

  ngAfterViewInit() {
    // let top = document.getElementById('top')
    // if(top !== null) {
    //   top.scrollIntoView();
    // }
  }


  switch() {
    this.isInSystem = !this.isInSystem
  }
}
