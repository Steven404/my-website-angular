import { Component, OnInit } from '@angular/core';
import { FirebaseRtdbService } from '../services/firebase-rtdb.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {


  aboutMe: string;

  isDarkTheme: boolean;

  title:string = 'About Me';

  constructor(
    private db: FirebaseRtdbService,
  ) { }

  ngOnInit(): void {
    this.getAboutMe();
  }

  getAboutMe(){
    this.isDarkTheme = localStorage.getItem('theme') === "Dark"? true:false;
    this.db.getObjectFromRTDB('/about_me').subscribe((res:string) => this.aboutMe=res);
  }

}
