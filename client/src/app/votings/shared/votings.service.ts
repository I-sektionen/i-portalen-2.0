import { Injectable } from '@angular/core';
import {DatabaseService} from '../../core/database/database.service';
import {Voting} from './votings.model';

@Injectable({
  providedIn: 'root'
})
export class VotingsService {

  private readonly path = 'votings';

  constructor(private databaseService: DatabaseService<Voting>) { }

  insertVoting(path: string, voting: Voting) { // ändra funktionen så att alla villkor inte behöver skickas med
    if (path !== null) {
      return this.databaseService.insert(path, voting);
    } else {
      return this.databaseService.insert(this.path, voting);
    }
  }

  updateVoting(id, voting: Voting) {
    return this.databaseService.update(this.path, id, voting);
  }

  getVoting(id) {
    return this.databaseService.get(this.path, id);
  }

  listVotings() {
    return this.databaseService.list(this.path);
  }

  deleteVoting(id) {
    return this.databaseService.delete(this.path, id);
  }
}
