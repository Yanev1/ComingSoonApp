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
  title = 'Janev';
  showMsg: boolean = false;
  subscribeData: any = <any>{};
  responseMsg: any;
  msgType: any;
  pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
  emailCheck(){
    if(this.subscribeData.email != '' && this.subscribeData.email != undefined){
      if(this.subscribeData.email.match(this.pattern)) {
        this.showMsg = true;
      }else{this.showMsg = false;}
    }else{
      this.showMsg = false;
    }
  }

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
          this.responseMsg = data.msg;
          this.msgType = 'Success'
        }
        else{
          console.log('oops', data);
          this.responseMsg = data.msg
          this.msgType = 'Fail'
        }
        error => console.log('fail', error)
      })
      subscribeForm.reset();
  }
  myDate = myDate()[0];
  scnds = (myDate()[0] * 86400) - myDate()[1];
  toSec = {
    seconds: this.scnds
  }
}
