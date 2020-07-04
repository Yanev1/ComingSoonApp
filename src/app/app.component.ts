import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubscribeService } from '../app/subscribe.service';

declare const myDate: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ComingSoonApp';
  showMsg: boolean = false;
  subscribeData: any = <any>{};
constructor(
    private subscribeService: SubscribeService
  ) { }
  ngOnInit() {
  }
  subscribe(subscribeForm: NgForm) {
    if (subscribeForm.invalid) {
      return;
    }
    this.subscribeService.subscribeToList(this.subscribeData)
      .subscribe( res => {
      this.showMsg = true;
      // .subscribe(res => {
        // alert('Subscribed!');
      this.subscribeData = {};
      }, err => {
        console.log('err');
        this.showMsg = false;
      })
  }
  myDate = myDate()[0];
  scnds = (myDate()[0] * 86400) - myDate()[1];
  toSec = {
    seconds: this.scnds
  }
}
