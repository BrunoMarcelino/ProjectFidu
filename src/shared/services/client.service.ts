import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // Call of the API
  public url = 'https://agrcf.lib.id/exercice@dev/';

  constructor(private http: HttpClient) { }

  // Function get API
  getClient() {
    return this.http.get(`${this.url}`);
    }
}
