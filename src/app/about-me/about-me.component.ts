import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutMe: string;

  title:string = 'About Me';

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.getAboutMe();
  }

  getAboutMe(){
    this.db.object("/about_me/")                      //Gets item ingredients and instructions
    .valueChanges()
    .subscribe((res: string) => {
      this.aboutMe = res;
    })
  }
}
