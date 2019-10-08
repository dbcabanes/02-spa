import { Component, OnInit } from '@angular/core';
// Aqui importamos el Servicio heroes
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  // En este constructor estamos llamando al sevicio HEROES
  constructor(private _heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);

  }

}
