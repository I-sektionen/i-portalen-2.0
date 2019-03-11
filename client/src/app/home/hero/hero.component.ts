import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs/index';
import { HeroService } from './shared/hero.service';
import { Hero } from './shared/hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  dataSource: Observable<Hero[]>;

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.dataSource = this.heroService.listHeros();
    console.log(this.dataSource);
  }

}
