import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';
import { Sponsor } from '../shared/sponsor.model';
import { SponsorService } from '../shared/sponsor.service';

@Component({
  selector: 'app-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.scss']
})
export class SponsorListComponent implements OnInit {

  sponsors: Observable<Sponsor[]>;

  constructor(
    private sponsorService: SponsorService
  ) { }

  ngOnInit() {
    this.sponsors = this.sponsorService.listSponsors();
  }

}
