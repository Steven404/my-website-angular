import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string = 'Home';

  cvName: string;

  constructor(private firestore: AngularFirestore, private titleService: Title) { }

  ngOnInit(): void {
    this.cvName = 'Stefanos Michelakis CV(English).pdf';
  }


}
