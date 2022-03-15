import { Component, Input, OnInit } from '@angular/core';
import { Pages } from 'src/types';
import { Router, RouterOutlet } from '@angular/router';
import { animateComponents } from './route-animations';
import { Title } from '@angular/platform-browser';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animateComponents]
})
export class AppComponent implements OnInit {
  
  firstTime: boolean;

  title = 'Stefanos Michelakis';

  @Input() isDarkTheme: boolean;

  pages: Pages[] = [
    {title: 'Home', path: 'home'},
    {title: 'About Me', path: 'about-me'},
    {title: 'Work Experience', path: 'work-experience'},
    {title: 'Projects', path: 'projects'},
    {title: 'Contact', path: 'contact'}
  ]

  constructor(private titleService: Title, private toast: HotToastService){}

  ngOnInit(): void{
    this.firstTime = true;
    this.isDarkTheme = localStorage.getItem('theme') === "Dark"? true:false;
  }

  changeTheme(event){
    this.isDarkTheme = event;
    this.changeHotToastTheme();
  }

  changeThemeLocal(){
    this.isDarkTheme == !this.isDarkTheme;
    localStorage.setItem('theme', this.isDarkTheme?"Dark" : "Light");
    this.changeHotToastTheme();
  }

  changeTitle(title: string){
    this.titleService.setTitle(title);
  }

  prepareRoute(outlet: RouterOutlet){
    this.firstTime = false;
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  changeHotToastTheme(){
    if (this.isDarkTheme){
      this.toast.defaultConfig = {
        ...this.toast.defaultConfig,
        duration: 2000,
        theme: 'snackbar',
        iconTheme: {
          primary: '#455a64',
          secondary: 'white',
        }
      }
    } else {
      this.toast.defaultConfig = {
        ...this.toast.defaultConfig,
        duration: 2000,
        theme: 'toast',
          iconTheme: {
            primary: '#00897B',
            secondary: 'white',
          }
      }
    }
  }
}
