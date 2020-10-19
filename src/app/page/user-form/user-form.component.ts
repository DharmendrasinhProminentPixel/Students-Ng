import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services';
import { User } from 'src/app/_modals';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  // selector: 'app-user-form',
  templateUrl: 'user-form.component.html'
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {
    /*
     // redirect to home if already logged in
     if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/']);
    }
    */

  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: this.formBuilder.array([])
    });

    // this.setUser(new User(null, "Dharm", ['1']));
  }

  get phone(): FormArray {
    return this.userForm.get("phone") as FormArray;
  }

  addPhone() : FormControl{
    // let newPhone = this.formBuilder.group({ num:['',Validators.required] });
    let newPhone = this.formBuilder.control('',[Validators.required, Validators.minLength(5), Validators.pattern('\\d{10}')]);
    this.phone.push(newPhone);
    return newPhone;
  }
  removePhone(i:number){
    this.phone.removeAt(i);
  }

  private errMsgObj = {
    phone: {
      required: 'Please enter phone number',
      pattern: 'Please enter valid mobile number (10 digits)'
    }
  };

  toErrMessages(errors,lbl=''):string[]{
    if(errors==null) return [];

    let errMsgs = [];
    Object.entries(errors).forEach(pair => {
      let k = pair[0], v=pair[1];

      let msg = this.errMsgObj[lbl] && this.errMsgObj[lbl][k];
      if(msg){
        errMsgs.push(msg);
        return;
      }

      switch(k){
        case "required": errMsgs.push('Please enter value'); break;
        case "minlength": errMsgs.push('Minimum length should '+v['requiredLength']); break;

        default: errMsgs.push(JSON.stringify(k)+": "+JSON.stringify(v)); break;
      }
    });

    return errMsgs;
  }

  public setUser(user:User){
    this.userForm.patchValue(user);
    this.phone.clear();
    if(user.phone)
      user.phone.forEach(n=>this.addPhone().patchValue(n));
    // this.phone.patchValue(user.phone);
  }

  // convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }

  submit() {
    this.submitted=true;

    // stop here if form is invalid
    if(this.userForm.invalid){
      return;
    }
    
    this.loading = true;
    /* 
    this.userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            }); */

    // this.message="Submitted";

    // console.log(this.form.valid, this.form.value, this.form.errors);
    // debugger;
    //this.userForm.value.phone.map(o=>o.num);

    this.userService.register(this.userForm.value)
        .pipe(first())
        .subscribe(
          data=>{
            this.alertService.success("Successfully Saved", true);
            this.router.navigate(['/user-list']); // '/login'
          },
          error=>{
            this.alertService.error("Error: "+error);
            this.loading=false;
          }
        );

    // this.message="Saved";
    // this.form.reset();
  }
}
