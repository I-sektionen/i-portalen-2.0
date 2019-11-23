import { Injectable } from '@angular/core';
import { DatabaseService } from '../../../core/database/database.service';
import { Sponsor } from './sponsor.model';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  private readonly path = 'sponsors';

  constructor(
    private databaseService: DatabaseService<Sponsor>,
  ) { }

  insertSponsor(sponsor: Sponsor) {
    return this.databaseService.insert(this.path, sponsor);
  }

  updateSponsor(id, sponsor: Sponsor) {
    return this.databaseService.update(this.path, id, sponsor);
  }

  getSponsor(id) {
    return this.databaseService.get(this.path, id);
  }

  listSponsors() {
    return this.databaseService.list(this.path);
  }

  deleteSponsor(id) {
    return this.databaseService.delete(this.path, id);
  }
}
