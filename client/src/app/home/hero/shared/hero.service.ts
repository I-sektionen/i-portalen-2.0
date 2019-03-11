import { Injectable } from '@angular/core';
import { DatabaseService } from '../../../core/database/database.service';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private readonly path = 'hero';

  constructor(
    private databaseService: DatabaseService<Hero>,
  ) { }

  insertHero(hero: Hero) {
    return this.databaseService.insert(this.path, hero);
  }

  updateHero(id, hero: Hero) {
    return this.databaseService.update(this.path, id, hero);
  }

  getHero(id) {
    return this.databaseService.get(this.path, id);
  }

  listHeros() {
    return this.databaseService.list(this.path);
  }

  deleteHero(id) {
    return this.databaseService.delete(this.path, id);
  }
}
