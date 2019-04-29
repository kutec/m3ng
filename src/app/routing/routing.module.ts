import { WeAreComponent } from './../we-are/we-are.component';
import { WeDoComponent } from './../we-do/we-do.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { UsersComponent } from './../users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'do',
    component: WeDoComponent
  },
  {
    path: 'we',
    component: WeAreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
