import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contactService: ContactService;

  contact: any = {};

  contactForm: FormGroup;

  constructor(contactService: ContactService, fb: FormBuilder) {
    this.contactService = contactService;
    this.contactForm = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'phone': '',
      'message': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  sendEmail() {
    this.contactService.sendEmail('Junior', 'junior.rt01@hotmail.com', 'Hello');
  }

}
