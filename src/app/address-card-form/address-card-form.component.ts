import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { $ } from 'protractor';
import { UserService } from '../service/user.service';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.modal';


@Component({
  selector: 'app-address-card-form',
  // template: `Hello brother`,
  templateUrl: './address-card-form.component.html',
  styleUrls: ['./address-card-form.component.css']
})
export class AddressCardFormComponent implements OnInit {

  // @Input() 
  //user: User = new User(0,"Dharm",[]);
  user : any = {name:"NNN"};
  message: string;

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern("[a-zA-Z ]*")])
  });

  constructor(
    private userService: UserService
  ) {
    String.prototype['format'] = function() {
      var args = arguments;
      return this.replace(/\{(\d+)\}/g, function() {
          return args[arguments[1]];
      });
    };
  }


  ngOnInit(): void {
    // this.updateErrMsg();
  }

  /*
  errMsg:any={};
  updateErrMsg():void{
    Object.entries(this.form.controls).forEach((arr:any[])=>{
      let k = arr[0];
      let v = arr[1];
      let c = this.form.controls[k];
      this.errMsg[k]=this.getErrorMessage(k,v,c.errors);
      // this.errMsg[k]=
    });
  }

  getErrorMessage(k,v,errs):string{
    console.log(k,v,errs);
    return JSON.stringify(errs);
  }
  */

  get c() {
    return this.form.controls;
  }
  // format(value:string, ...params: any):string{
  //     var args = arguments;
  //     return value.replace(/\{(\d+)\}/g, function() {
  //         return args[arguments[1]];
  //     });
  // }

  submit(userForm) {
    this.message="Submitted";

    console.log(this.form.valid, this.form.value, userForm, this.form.errors);
    // debugger;
    this.userService.addUser(new User(null, this.form.value.name, []));

    this.message="Saved";
    this.form.reset();
  }
}
