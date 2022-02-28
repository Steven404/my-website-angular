import { Component, Input, OnInit } from '@angular/core';
import { Pages } from 'src/types';
import { Router, RouterOutlet } from '@angular/router';
import { animateComponents } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animateComponents]
})
export class AppComponent implements OnInit {
  
  firstTime: boolean = true;

  title = 'Stefanos Michelakis';

  @Input() isDarkTheme: boolean;

  pages: Pages[] = [
    {title: 'Home', path: 'home'},
    {title: 'About Me', path: 'about-me'},
    {title: 'Work Experience', path: 'work-experience'},
    {title: 'Projects', path: 'projects'},
    {title: 'Contact', path: 'contact'}
  ]

  constructor(private router: Router){}

  ngOnInit(): void{
    this.firstTime = true;
    this.isDarkTheme = localStorage.getItem('theme')=== "Dark"? true:false;
    this.router.events.subscribe(val => this.firstTime = false);
  }

  changeTheme(event){
    this.isDarkTheme = event;
    console.log(this.isDarkTheme);
  }

  changeThemeLocal(){
    this.isDarkTheme == !this.isDarkTheme;
    localStorage.setItem('theme', this.isDarkTheme?"Dark" : "Light")
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
