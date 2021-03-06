import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'alert',
  template: `<div *ngIf="message" [ngClass]="message.cssClass">{{message.text}}</div>`
})
export class AlertComponent implements OnInit, OnDestroy {
  message: any;
  private subscription: Subscription;

  constructor(private alertService:AlertService) { }

  ngOnInit(): void {
    this.subscription = this.alertService.getAlert()
        .subscribe(message=>{
          switch(message && message.type){
            case 'success':
              message.cssClass = 'alert alert-success';
              break;
            case 'error':
              message.cssClass = 'alert alert-danger';
              break;
            case 'info':
              message.cssClass = 'alert alert-info';
              break;
            }

          this.message = message;
        });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
