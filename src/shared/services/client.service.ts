import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  uri = 'https://agrcf.lib.id/exercice@dev/';

  constructor(private http: HttpClient) { }


 /* create(name, contact, request, date, comment) {
    const obj = {
      name: name,
      contact: contact,
      request: request,
      date: date,
      comment: comment
    };
    this.http.post(`${this.uri}/store`, obj)
        .subscribe(res => alert('Your request has been send to Admin, Our companie will call you after a few time kiss'));
  }
*/

  getClient() {
    return this.http.get(`${this.uri}`);
    }
}
