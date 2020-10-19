import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterRouteChange = false;

  constructor(router: Router) {
    router.events.subscribe(event=>{
      if(event instanceof NavigationStart){
        if(this.keepAfterRouteChange)
          this.keepAfterRouteChange=false; //single time ignore clear (redirect message)
        else
          this.clear();
      }
    })
  }

  getAlert(): Observable<any>{
    return this.subject.asObservable();
  }

/*   info(message: string, keepAfterRouteChange=false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'info', text: message});
  } */

  success(message: string, keepAfterRouteChange=false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'success', text: message});
  }

  error(message: string, keepAfterRouteChange=false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'error', text: message});
  }

  clear() {
    //set no message so it will be cleared
    this.subject.next();
  }
}
