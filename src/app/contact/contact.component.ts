import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ContactInfo } from 'src/types';
import { FirebaseRtdbService } from '../services/firebase-rtdb.service';
import { HotToastService } from '@ngneat/hot-toast';

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

  constructor(
    private clipboardApi: ClipboardService, 
    private db: FirebaseRtdbService, 
    private toast: HotToastService
    ) { }

  ngOnInit(): void {
    this.db.getObjectFromRTDB('/contact_info').subscribe((res: ContactInfo) => this.contactInfo = res )
  }

  copyText(content: string){
    this.clipboardApi.copyFromContent(content);
    if (content.charAt(0)=='+'){
      this.toast.success('My phone number has been copied to your clipboard', {id: 'pause', duration: 1500});
    } else {
      this.toast.success('My email has been copied to your clipboard', {id: 'pause', duration: 1500});
    }
  }

}
