import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero'
import { HeroService} from '../../services/hero.service'

import { Router} from '@angular/router'

@Component({
  selector: 'heroes-root',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit{
  heroes: Hero[]
  selectedHero: Hero

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
  constructor(
    private heroService: HeroService,
    private router: Router

  ){

  }
  getHeroes():void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes()
  }
  gotoDetail(): void {
      this.router.navigate(['heroes/detail', this.selectedHero.id])
  }
}




