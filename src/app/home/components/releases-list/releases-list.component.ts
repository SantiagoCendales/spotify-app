import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../core/spotify.service';

@Component({
  selector: 'app-releases-list',
  templateUrl: './releases-list.component.html',
  styleUrls: ['./releases-list.component.scss']
})
export class ReleasesListComponent implements OnInit {


  releases: any;
  dataToken: any;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.fetchNewReleases();
  }

  fetchNewReleases() {
    this.spotifyService.getNewReleases()
    .subscribe(item => {
      this.releases = item;
    });
  }

}
