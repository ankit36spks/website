import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {

  public bgColor: boolean = false;

  constructor(
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.changeBackground(this.location.path().slice(1));
  }

  changeBackground(pageName: string) {
    switch (pageName) {
      case 'about': this.bgColor = true;
        break;

      case 'contact': this.bgColor = true;
        break;

      case 'resume': this.bgColor = true;
        break;

      case 'work': this.bgColor = true;
        break;

      default: this.bgColor = false;
        break;
    }
  }
}
