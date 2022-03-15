import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { HotToastService } from '@ngneat/hot-toast';
import { ProjectCard } from 'src/types';
import { FirebaseRtdbService } from '../services/firebase-rtdb.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  title:string = 'Projects';

  projectCards: ProjectCard[];

  constructor(
    private db: FirebaseRtdbService,
  ) { }

  ngOnInit(): void {
    this.db.getListFromRTDB('/my_projects').subscribe((res: ProjectCard[]) => this.projectCards = res)
  }

}
