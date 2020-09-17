import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from  'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:string='Please click on button Load';

  constructor(
    private http:HttpClient
  ) {}

  ngOnInit(): void {
  }

  /**
   * Load data from server
   * 
   * @author Dharmendrasinh Chudasama
   */
  load():void{
    let url = "http://localhost:4200";
    // let url = "https://www.w3schools.com/jquery/demo_test.txt";
    
    this.http.get(url,{responseType:"text"})
      .pipe(catchError((err:HttpErrorResponse):(Observable<string>)=>{
        //handle error
        return of("My Custom Error handling: can not fetch data : "+err.statusText);
      }))
      .subscribe((data:string)=>this.data=data);
  }
}
