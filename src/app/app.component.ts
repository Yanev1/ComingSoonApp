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
  showMsg: boolean = true;
  subscribeData: any = <any>{};
  responseMsg: any;
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
      .subscribe( data => {
        if(data.result != 'error'){
          console.log('success', data)
          this.responseMsg = data.msg
          // this.showMsg = true;
        }
        else{
          console.log('oops', data);
          // this.showMsg = false;
          this.responseMsg = data.msg
        }
      // .subscribe(res => {
        // alert('Subscribed!');
        this.subscribeData = {};
        error => console.log('fail', error)
      // }, err => {
      //   console.log('err');
      //   this.showMsg = false;
      })
  }
  myDate = myDate()[0];
  scnds = (myDate()[0] * 86400) - myDate()[1];
  toSec = {
    seconds: this.scnds
  }
}
