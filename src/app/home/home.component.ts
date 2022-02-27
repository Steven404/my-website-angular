import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cvName: string;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.cvName = 'Stefanos Michelakis CV(English).pdf';
  }

}
