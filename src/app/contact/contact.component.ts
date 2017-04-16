import { Component, OnInit } from '@angular/core';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contactService: ContactService;

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  ngOnInit() {
  }

  sendEmail() {
    this.contactService.sendEmail('Junior', 'junior.rt01@hotmail.com', 'Hello');
  }

}
