import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { WorkExperienceCard } from 'src/types';
import { FirebaseRtdbService } from '../services/firebase-rtdb.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperienceCards: WorkExperienceCard[];

  title:string = 'Work Experience';

  constructor(private db: FirebaseRtdbService) { }

  ngOnInit(): void {
    this.db.getListFromRTDB('/work_experience').subscribe((res: WorkExperienceCard[]) => this.workExperienceCards = res)
  }

}
