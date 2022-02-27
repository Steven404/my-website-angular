import { Component, Input, OnInit } from '@angular/core';
import { Pages } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stefanos Michelakis';

  @Input() isDarkTheme: boolean;

  pages: Pages[] = [
    {title: 'Home', path: 'home'},
    {title: 'About Me', path: 'about-me'},
    {title: 'Work Experience', path: 'work-experience'},
    {title: 'Contact', path: 'contact'}
  ]

  ngOnInit(): void{
    this.isDarkTheme = localStorage.getItem('theme')=== "Dark"? true:false;
  }

  changeTheme(event){
    this.isDarkTheme = event;
    console.log(this.isDarkTheme);
  }

  changeThemeLocal(){
    this.isDarkTheme == !this.isDarkTheme;
    localStorage.setItem('theme', this.isDarkTheme?"Dark" : "Light")
  }
}
