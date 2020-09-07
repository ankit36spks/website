import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import * as config from '../../data/config.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  contactForm: FormGroup;
  contactConfig: any = config.contact;

  constructor(fb: FormBuilder) {
    this.contactForm = fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl(''),
    });
  }
  onSubmit() {
    console.log(this.contactForm);
  }

  ngOnInit() {}

  openFull() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }

  closeImg() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  ngAfterViewInit() {}
}
