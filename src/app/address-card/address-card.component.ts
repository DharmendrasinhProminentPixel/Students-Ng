import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.modal';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input() user:User;

  constructor() { }

  ngOnInit(): void {
  }

}
