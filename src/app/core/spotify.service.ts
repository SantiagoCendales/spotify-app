import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // TODO: Falta poner clientId y secretId

  requestResponse: any;


  getToken() {
    const headers = {
      Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret),
      'Content-type': 'application/x-www-form-urlencoded'
    };

    const body = new HttpParams()
    .set('grant_type', 'client_credentials');

    return this.httpClient.post('https://accounts.spotify.com/api/token', body, { headers })
    .subscribe((dataToken: any) => {
      localStorage.setItem('auth_token', dataToken.access_token);
    });
  }


  getNewReleases() {
    this.getToken();

    let token: string;
    token = localStorage.getItem('auth_token');

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases?country=CO&limit=12&offset=0', { headers }).pipe(
      map(data => data['albums'].items));
  }

}
