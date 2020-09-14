import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user.modal';

@Component({
  selector: 'app-address-card-list',
  templateUrl: './address-card-list.component.html',
  styleUrls: ['./address-card-list.component.css']
})
export class AddressCardListComponent implements OnInit {
  users: User[] = [];

  constructor(userService:UserService) {
    this.users = userService.getUsers();
  }

  ngOnInit(): void {
  }

}
