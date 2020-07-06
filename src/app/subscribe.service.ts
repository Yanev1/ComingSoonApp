import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  mailChimpEndpoint = 'https://emails.us10.list-manage.com/subscribe/post-json?u=5b62dc3ff83c91582ff9da5d2&id=0d05047bfc';
  constructor(
    private http: HttpClient
  ) { }
  // subscribeToList(data){
  subscribeToList(data: any): Observable<any> {
    const params = new HttpParams()
      .set('EMAIL', data.email) //EMAIL is the property in Mailchimp and it has to be on all "input name" tags as well
      .set('group[15357][1]', 'true')
      // .set('b_b736eb9e9077236cbd681a53b_4b66a82360', '');
      .set('b_5b62dc3ff83c91582ff9da5d2_0d05047bfc', '');
    const mailChimpUrl = `${this.mailChimpEndpoint}&${params.toString()}`;
    return this.http.jsonp(mailChimpUrl, 'c')
  }
  
}
