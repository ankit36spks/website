import { Component, OnInit } from '@angular/core';
import * as config from "../../data/config.json";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resumeConfig: any = config.resume;

  constructor() { }

  ngOnInit() {
  }

}
