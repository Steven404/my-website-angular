import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ContactInfo } from 'src/types';
import { FirebaseRtdbService } from '../services/firebase-rtdb.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactInfo: ContactInfo = {
    email: '',
    social: new Array(),
    phoneNo: ''
  };

  title:string = 'Contact';

  constructor(private clipboardApi: ClipboardService, private db: FirebaseRtdbService) { }

  ngOnInit(): void {
    this.db.getObjectFromRTDB('/contact_info').subscribe((res: ContactInfo) => this.contactInfo = res )
  }

  copyText(content: string){
    this.clipboardApi.copyFromContent(content);
    if (content.charAt(0)=='+'){
      window.alert('My phone number is coppied to your clipboard!')
    } else {
      window.alert('My email is coppied to your clipboard!')
    }
  }

}
