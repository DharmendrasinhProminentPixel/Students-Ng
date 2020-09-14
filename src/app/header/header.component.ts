import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('routes') routes: any[];

  constructor(router:Router) {
    // router.events.subscribe(evt=>{
    //   console.log(evt);
    // });
  }

  ngOnInit(): void {
    this.routes.forEach(console.log);
  }

}
