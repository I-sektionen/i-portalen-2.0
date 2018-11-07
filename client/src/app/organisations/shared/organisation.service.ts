import { Injectable } from '@angular/core';
import { DatabaseService } from '../../core/database/database.service';
import { Organisation } from './organisation.model';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor(
    private databaseService: DatabaseService<Organisation>
  ) { }
}
