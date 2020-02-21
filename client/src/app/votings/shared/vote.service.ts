import {Injectable} from '@angular/core';
import {DatabaseService} from '../../core/database/database.service';
import {Vote} from './vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private readonly path = 'votings';

  constructor(private databaseService: DatabaseService<Vote>) {
  }

  insertVote(path: string, vote: Vote) {
    return this.databaseService.insert(path, vote);
  }

  createVote(path: string, vote: Vote) {
    return this.databaseService.insert(path, vote);
  }

  getVote(id) {
    return this.databaseService.get(this.path, id);
  }

  listVotes() {
    return this.databaseService.list(this.path);
  }
}
