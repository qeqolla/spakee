import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isInSystem = false

  constructor() {
  }

  ngOnInit(): void {
  }

  switch() {
    this.isInSystem = !this.isInSystem
  }
}
