import { Injectable } from '@angular/core';
import { DatabaseService } from '../../core/database/database.service';
import { Organisation } from './organisation.model';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  private readonly path = 'organisations';

  constructor(
    private databaseService: DatabaseService<Organisation>,
  ) { }

  insertOrganisation(organisation: Organisation) {
    return this.databaseService.insert(this.path, organisation);
  }

  updateOrganisation(id, organisation: Organisation) {
    return this.databaseService.update(this.path, id, organisation);
  }

  getOrganisation(id) {
    return this.databaseService.get(this.path, id);
  }

  listOrganisations() {
    return this.databaseService.list(this.path);
  }

  deleteOrganisation(id) {
    return this.databaseService.delete(this.path, id);
  }
}
