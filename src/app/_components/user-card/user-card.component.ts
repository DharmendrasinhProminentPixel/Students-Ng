import { Component, Input } from '@angular/core';
import { User } from '../../_modals';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  // styleUrls: ['./address-card.component.css']
})
export class UserCardComponent {

  @Input() user:User;

  constructor() { }

}
