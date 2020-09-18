import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  // styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {
  @Input() num:number;
  @Output() changNum = new EventEmitter();

  constructor() { }

  incr(){ this.resize(this.num+1); }
  decr(){ this.resize(this.num-1); }

  resize(num:number){
    this.changNum.emit(num);
    this.num = num;
  }

}
