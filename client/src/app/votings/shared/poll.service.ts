import {Injectable} from '@angular/core';
import {DatabaseService} from '../../core/database/database.service';
import {Poll} from './poll.model';
import {Pollq} from './pollq';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private readonly path = 'polls';

  constructor(private databaseService: DatabaseService<Poll>, private databasequestionService: DatabaseService<Pollq>) {
  }

  // Poll Service
  insertPoll(poll: Poll) {
    return this.databaseService.insert(this.path, poll);
  }

  updatePoll(id, poll: Poll) {
    return this.databaseService.update(this.path, id, poll);
  }

  getPoll(id) {
    return this.databaseService.get(this.path, id);
  }

  listPolls() {
    return this.databaseService.list(this.path);
  }

  deletePoll(id) {
    return this.databaseService.delete(this.path, id);
  }

  // Poll Question Service
  insertPollQ(pollq: Pollq) {
    return this.databasequestionService.insert(this.path, pollq);
  }

  updatePollQ(id, pollq: Pollq) {
    return this.databasequestionService.update(this.path, id, pollq);
  }

  getPollQ(id) {
    return this.databasequestionService.get(this.path, id);
  }

  listPollQs() {
    return this.databasequestionService.list(this.path);
  }

  deletePollQ(id) {
    return this.databasequestionService.delete(this.path, id);
  }
}
