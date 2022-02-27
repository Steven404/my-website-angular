import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { WorkExperienceCard } from 'src/types';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperienceCards: WorkExperienceCard[];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.db.list('work_experience')
    .valueChanges()
    .subscribe((res: WorkExperienceCard[]) =>{
      this.workExperienceCards = res;
      console.log(this.workExperienceCards);
    });
  }

}
