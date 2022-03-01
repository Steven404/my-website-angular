import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ProjectCard } from 'src/types';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  title:string = 'Projects';

  projectCards: ProjectCard[];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {    
    this.db.list('my_projects')
    .valueChanges()
    .subscribe((res: ProjectCard[]) =>{
      this.projectCards = res;
    });
    
}

}
