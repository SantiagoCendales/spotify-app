import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imageUrl = '/assets/images/spotify-logo-edit.png';

  constructor() { }

  ngOnInit(): void {
  }

}
