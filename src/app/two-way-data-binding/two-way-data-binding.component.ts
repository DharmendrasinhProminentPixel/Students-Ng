import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {
  @Input() num:number;
  @Output() changer = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incr(){ this.resize(this.num+1); }
  decr(){ this.resize(this.num-1); }

  resize(num:number){
    this.changer.emit(num);
    this.num = num;
  }

}
