import { Component } from '@angular/core';
declare const myDate: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComingSoonApp';
  myDate = myDate()[0];
  scnds = (myDate()[0] * 86400) - myDate()[1];
  
  
  toSec = {
    seconds: this.scnds
  }
}
