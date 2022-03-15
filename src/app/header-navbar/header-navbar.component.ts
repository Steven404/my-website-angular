import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Pages } from 'src/types';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {

  @Output() public sidenavToggleEmmiter = new EventEmitter();

  @Output() public themeEmitter = new EventEmitter<boolean>();

  @Input() isDarkTheme: boolean = true;

  pages: Pages[] = [
    {title: 'Home', path: 'home'},
    {title: 'About Me', path: 'about-me'},
    {title: 'Work Experience', path: 'work-experience'},
    {title: 'Projects', path: 'projects'},
    {title: 'Contact', path: 'contact'}
  ]

  currentPage: string;

  constructor(private toast: HotToastService) {
    this.currentPage = 'Stefanos Michelakis';
   }

  ngOnInit(): void {
    this.isDarkTheme = localStorage.getItem('theme')=== "Dark"? true:false;
    this.themeEmitter.emit(this.isDarkTheme);
  }

  onToggleSidenav(){
    this.sidenavToggleEmmiter.emit();
  }

  storeThemeSelection(){
    localStorage.setItem('theme', this.isDarkTheme?"Dark" : "Light")
    this.themeEmitter.emit(this.isDarkTheme);
    if(this.isDarkTheme) this.toast.success('Dark theme enabled!')
    else this.toast.success('Dark theme disabled!');
  }

}
