import { Component, Input, OnInit } from '@angular/core';
import { ProjectCard } from 'src/types';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  panelOpenState: boolean;

  @Input() projectCard: ProjectCard;

  constructor() { }

  ngOnInit(): void {
  }

}
