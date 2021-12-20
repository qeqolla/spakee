import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-passgenpart',
  templateUrl: './passgenpart.component.html',
  styleUrls: ['./passgenpart.component.css']
})
export class PassgenpartComponent implements OnInit {
  public Name!: string

  constructor() {
  }

  ngOnInit(): void {
    $(window).scroll(() => {
      if (window.scrollY >= 200) {
        $('.arrow-up').fadeIn(700)
      } else {
        $('.arrow-up').fadeOut(700)
      }
    }).trigger('scroll')

    $('.arrow-up').click(() => {
      $('html').animate({
        scrollTop: 0
      }, 1000)
    })
  }
}
