import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding-page',
  templateUrl: './two-way-data-binding-page.component.html',
  // styleUrls: ['./two-way-data-binding-page.component.css']
})
export class TwoWayDataBindingPageComponent implements OnInit {

  fontSize:number = 10;
  
  constructor() { }

  ngOnInit(): void {
  }

}
