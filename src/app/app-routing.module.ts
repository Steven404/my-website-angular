import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: { animation : '1', title: 'Home'}},
  {path: 'about-me', component: AboutMeComponent, data: { animation : '2', title: 'About Me'}},
  {path: 'work-experience', component: WorkExperienceComponent, data: { animation : '3', title: 'Work Experience'}},
  {path: 'projects', component: ProjectsComponent, data: { animation : '4', title: 'Projects'}},
  {path: 'contact', component: ContactComponent, data: { animation : '5', title: 'Contact'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
