import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      message: new FormControl(null, Validators.maxLength(100)),
      country: new FormControl(null)
    })
  }

  submit() {
    console.log(this.contactForm.value);
  }

}
