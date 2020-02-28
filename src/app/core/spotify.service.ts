import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  clientId = '978b3f7580f143f9ba41c41489abc026';
  clientSecret = '04dad104d4e3442098c4aef22ff25439';

  requestResponse: any;
  token: string;

  getToken() {
    const headers = {
      Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret),
      'Content-type': 'application/x-www-form-urlencoded'
    };
    const body = new HttpParams()
    .set('grant_type', 'client_credentials');
    return this.httpClient.post('https://accounts.spotify.com/api/token', body, { headers })
    .subscribe(dataToken => {
      this.requestResponse = dataToken;
      this.token = this.requestResponse.access_token;
      console.log(this.token);
    },
      err => alert('Invalid Client Credentials'));
    }

}
