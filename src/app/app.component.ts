import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Students';
  
  routes: any[] = [
    {label:"Home", url:"home"},
    // {label:"Settings", url:"settings"},
    {label:"Address Card List", url:"address-card-list"},
  ];
}
