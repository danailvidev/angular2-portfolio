import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroComponent } from './components/hero/hero.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HeroesComponent } from './heroes.component'

const routes: Routes = [
  {
    path: 'heroes', component: HeroesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'heroes', component: HeroComponent },
      { path: 'detail/:id', component: HeroDetailComponent },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
