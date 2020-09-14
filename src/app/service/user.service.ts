import { Injectable } from '@angular/core';
import { User } from '../user.modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() {
    this.users.push(new User(1,'Dharmendrasinh',['8238587609','9876543210']));
    this.users.push(new User(2,'Pruthvirajsinh',['1111111111','2222222222']));
    console.log("User service has been initialized....");
  }

  public getUsers():User[]{
    // if(this.users.length==0)
    //   this.ngOnInit();
    return this.users;
  }
}
