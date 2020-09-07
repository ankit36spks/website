import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss'],
})
export class SocialIconsComponent implements OnInit {
  constructor() {}

  showLinkedin = false;
  showTwitter = false;
  showInsta = false;
  showFb = false;
  showGmail = false;

  ngOnInit() {}
}
