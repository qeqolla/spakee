import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  public infoCardDescription = new Map<string, string>([
    ['../../../../assets/images/crossplatorm.png', 'Кросплатформеність'],
    ['../../../../assets/images/free.png', 'БЕЗКОШТОВНИЙ функціонал'],
    ['../../../../assets/images/reminder.png', 'Нагадування про періодичну зміну паролю'],
    ['../../../../assets/images/password.png', 'Захищені паролі'],
  ])

  constructor() {
  }

  ngOnInit(): void {
  }

}
