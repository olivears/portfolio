import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {

  private http: Http;
  private EMAIL = 'franclisgaldino@gmail.com';
  private DOMAIN = 'https://api:key-4ffe5010ad22869d737a31e927120765@api.mailgun.net/v3/sandbox83a59bf5d73e457eb41d1dfdea0e16c5.mailgun.org/messages';

  constructor(http: Http) {
    this.http = http;
  }

  sendEmail (name, email, message) {
    const headers = new Headers();
    headers.append('Content-Type',  'application/x-www-form-urlencoded');

    const options = new RequestOptions({ headers: headers });
    const body = 'from=' + email + '&to=' + this.EMAIL + '&subject=Test&text=' + message;
    this.http.post(this.DOMAIN, body, options)
      .map(result => result.json())
      .do(result => console.log('RESULT: ', JSON.stringify(result)))
      .subscribe(result => {
        console.log('SENT!', result);
      }, error => {
        console.log(error);
      });
  }


}
