import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyRoute } from '../app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  routes: any[] = []; //fill dynamically by constructor

  constructor(router:Router) {
    router.config
      .map((route:MyRoute)=>route)
      .filter(route=>route.label!=null && route.path!=null)
      .forEach((route)=>{
        this.routes.push({
          label: route.label,
          url: route.path
        });
      });
  }

}
