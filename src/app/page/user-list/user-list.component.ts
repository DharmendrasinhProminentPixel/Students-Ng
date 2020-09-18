import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_modals/user';
import { UserService } from 'src/app/_services';

@Component({
  // selector: 'app-user-list',
  templateUrl: 'user-list.component.html'
})
export class UserListComponent {
  users: User[] = [];

  constructor(userService:UserService) {
    this.users = userService.getUsers();
  }

}
