import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-address-card-form',
  templateUrl: './address-card-form.component.html',
  styleUrls: ['./address-card-form.component.css']
})
export class AddressCardFormComponent implements OnInit {

  // @Input() user: User;
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern("[a-zA-Z ]*")])
  });

  constructor() { }
  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.valid + ":" + this.form.value);
  }
}
