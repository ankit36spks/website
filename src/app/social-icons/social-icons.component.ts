import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-social-icons",
  templateUrl: "./social-icons.component.html",
  styleUrls: ["./social-icons.component.scss"],
})
export class SocialIconsComponent implements OnInit {
  constructor() {}

  showLinkedin: boolean = false;
  showTwitter: boolean = false;
  showInsta: boolean = false;
  showFb: boolean = false;
  showGmail: boolean = false;

  ngOnInit() {}
}
