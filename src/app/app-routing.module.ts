import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'experience', component: ExperienceComponent },
  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
