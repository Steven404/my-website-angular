import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ClipboardService } from 'ngx-clipboard';
import { ContactInfo } from 'src/types';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactInfo: ContactInfo;

  constructor(private db: AngularFireDatabase, private clipboardApi: ClipboardService) { }

  ngOnInit(): void {
    this.db.object('/contanct_info')
    .valueChanges()
    .subscribe((res: ContactInfo) =>{
      this.contactInfo = res;
    })
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
