import {Injectable} from '@angular/core';
import {DatabaseService} from '../../core/database/database.service';
import {Voting} from './votings.model';

@Injectable({
  providedIn: 'root'
})
export class VotingsService {

  private readonly path = 'votings';

  constructor(private databaseService: DatabaseService<Voting>) { }

  insertVoting(voting: Voting) {
    return this.databaseService.insert('votings', voting);
  }

  insertVote(path: string, voting: Voting) {
    return this.databaseService.insert(path, voting);
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
