import { Component, OnInit } from '@angular/core';
import * as config from '../../data/config.json';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  homeConfig: any = config.home;
  qualities: string[] = this.homeConfig.qualities;
  quality: string;

  ngOnInit() {
    this.changeQualities();
  }

  changeQualities() {
    let count = 0;
    this.quality = this.qualities[count];
    setInterval(() => {
      count === this.qualities.length - 1 ? (count = 0) : count++;
      this.quality = this.qualities[count];
    }, 800);
  }
}
