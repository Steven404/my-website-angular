import { Component, Input, OnInit } from '@angular/core';
import { WorkExperienceCard } from 'src/types';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent implements OnInit {

  panelOpenState: boolean;

  @Input() workCard: WorkExperienceCard;

  constructor() { }

  ngOnInit(): void {

  }

}
