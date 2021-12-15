import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() imagePath!: string;
  @Input() description!: string | undefined;




  constructor() { }

  ngOnInit(): void {
  }

}
