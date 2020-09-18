import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../_modals';

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
    return this.users;
  }

  public register(user:User):Observable<User>{
    let s = new Subject<User>();

    setTimeout(()=>{
      if(user.id==null)
        user.id = this.users.length+1;

      this.users.push(user);

      s.next(user);
      // s.error("EEEE");
    },700);

    return s.asObservable();
  }
}
