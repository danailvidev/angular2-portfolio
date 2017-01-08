import {Component} from '@angular/core';
@Component({
  selector: 'app-heroes',
  template: `
  <div class="container">
   <h1>{{title}}</h1>
  <nav>
    <a routerLink="dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  title = 'Tour of Heroes';
}
