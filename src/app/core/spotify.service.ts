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

  // purabsdjbakdbas = [];

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

    return this.httpClient.post('https://accounts.spotify.com/api/token', body, { headers });
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQB1iOqlvOJNZDbNPdmr9ja4v_KYQSlllhKqaivYpj37zTQEjcFadOAE1ktKwyU75B958HB_XBF6zYu89jU'
    });
    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases?country=CO&limit=24&offset=0', { headers }).pipe(
      map(data => data['albums'].items));
  }

}
