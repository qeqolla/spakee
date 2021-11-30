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
    ['../../../../assets/images/synchronization.png', 'Швидка синхронізація з усіма  пристроями'],
    ['../../../../assets/images/setting.png', 'Гнучкі налаштування'],
    ['../../../../assets/images/interface.png', 'Зручний інтерфейс'],
    ['../../../../assets/images/registration.png', 'Необмежена кількість записів'],
    ['../../../../assets/images/check.png', 'Перевірка паролів, логінів та номери телефону'],
  ])

  constructor() {
  }

  ngOnInit(): void {
  }

}
