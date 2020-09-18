import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services';
import { User } from 'src/app/_modals';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-user-form',
  templateUrl: 'user-form.component.html'
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  loading = false;
  submitted = false;

  // @Input() 
  //user: User = new User(0,"Dharm",[]);
  // user : any = {name:"NNN"}; //depr
  message: string;
 /*  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern("[a-zA-Z ]*")])
  }); */

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
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
    // this.form.patchValue(user)
    // this.updateErrMsg();
    this.setUser(new User(null, "Dharm", ['1']));
  }

  get phone(): FormArray {
    return this.userForm.get("phone") as FormArray;
  }

  addPhone() : FormControl{
    // let newPhone = this.formBuilder.group({ num:['',Validators.required] });
    let newPhone = this.formBuilder.control('',[Validators.required, Validators.minLength(5)]);
    this.phone.push(newPhone);
    return newPhone;
  }
  removePhone(i:number){
    this.phone.removeAt(i);
  }

  toErrMessages(errors):string[]{
    if(errors==null) return [];

    let errMsgs = [];
    Object.entries(errors).forEach(pair => {
      let k = pair[0], v=pair[1];
      switch(k){
        case "required": errMsgs.push('Please enter value'); break;
        case "minlength": errMsgs.push('Minimum length should '+v['requiredLength']); break;

        default: errMsgs.push(JSON.stringify(k)+": "+JSON.stringify(v)); break;
      }
    });

    return errMsgs;
  }
  a(o:any){
    // debugger;
    console.log("A",o);
    // return o==null ? null : o.required;
  }

  public setUser(user:User){
    this.userForm.patchValue(user);
    this.phone.clear();
    if(user.phone)
      user.phone.forEach(n=>this.addPhone().patchValue(n));
    // this.phone.patchValue(user.phone);
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

 /*  get c() {
    return this.form.controls;
  } */
  // format(value:string, ...params: any):string{
  //     var args = arguments;
  //     return value.replace(/\{(\d+)\}/g, function() {
  //         return args[arguments[1]];
  //     });
  // }

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
    let user = this.userForm.value;
    user.phone = user.phone.map(o=>o.num);
    this.userService.register(user)
        .subscribe(
          data=>{
            this.message="Saved";
            this.router.navigate(['/user-list']);
          },
          error=>{
            this.message="Error: "+error;
            this.loading=false;
          }
        );

    // this.message="Saved";
    // this.form.reset();
  }
}
