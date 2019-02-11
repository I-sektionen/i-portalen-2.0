import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '../shared/organisation.service';
import { Observable } from 'rxjs';
import { Organisation } from '../shared/organisation.model';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.list.component.html',
  styleUrls: ['./organisations.list.component.scss']
})
export class OrganisationsListComponent implements OnInit {
  //@input
  /* organisations = [
    { organisation: "webgroup", org_logo_url: "https://pbs.twimg.com/profile_images/500210368396816385/HzdAVBGq_400x400.png" },
    { organisation: "alumni", org_logo_url: "https://www.hv71.se/team_graphics/nef_shl/hv711-hv71-32ce9/logo_square/200.png" },
    { organisation: "näringslivsutskottet", org_logo_url: "https://pbs.twimg.com/profile_images/466315238/Farjestad_BK_twitter_400x400.gif" },
    { organisation: "styret", org_logo_url: "https://www.frolundaindians.com/team_graphics/nef_shl/fhc1-fhc-f7c59/logo_square/200.png" },
    { organisation: "clubmästeriet", org_logo_url: "https://www.roglebk.se/team_graphics/nef_shl/rbk1-rbk-539f1/logo_square/200.png" },
    { organisation: "webgroup", org_logo_url: "https://pbs.twimg.com/profile_images/500210368396816385/HzdAVBGq_400x400.png" },
    { organisation: "alumni", org_logo_url: "https://www.hv71.se/team_graphics/nef_shl/hv711-hv71-32ce9/logo_square/200.png" },
    { organisation: "näringslivsutskottet", org_logo_url: "https://pbs.twimg.com/profile_images/466315238/Farjestad_BK_twitter_400x400.gif" },
    { organisation: "styret", org_logo_url: "https://www.frolundaindians.com/team_graphics/nef_shl/fhc1-fhc-f7c59/logo_square/200.png" },
    { organisation: "clubmästeriet", org_logo_url: "https://www.roglebk.se/team_graphics/nef_shl/rbk1-rbk-539f1/logo_square/200.png" },
    { organisation: "webgroup", org_logo_url: "https://pbs.twimg.com/profile_images/500210368396816385/HzdAVBGq_400x400.png" },
    { organisation: "alumni", org_logo_url: "https://www.hv71.se/team_graphics/nef_shl/hv711-hv71-32ce9/logo_square/200.png" },
    { organisation: "näringslivsutskottet", org_logo_url: "https://pbs.twimg.com/profile_images/466315238/Farjestad_BK_twitter_400x400.gif" },
    { organisation: "styret", org_logo_url: "https://www.frolundaindians.com/team_graphics/nef_shl/fhc1-fhc-f7c59/logo_square/200.png" },
    { organisation: "clubmästeriet", org_logo_url: "https://www.roglebk.se/team_graphics/nef_shl/rbk1-rbk-539f1/logo_square/200.png" },
    { organisation: "webgroup", org_logo_url: "https://pbs.twimg.com/profile_images/500210368396816385/HzdAVBGq_400x400.png" },
    { organisation: "alumni", org_logo_url: "https://www.hv71.se/team_graphics/nef_shl/hv711-hv71-32ce9/logo_square/200.png" },
    { organisation: "näringslivsutskottet", org_logo_url: "https://pbs.twimg.com/profile_images/466315238/Farjestad_BK_twitter_400x400.gif" },
    { organisation: "styret", org_logo_url: "https://www.frolundaindians.com/team_graphics/nef_shl/fhc1-fhc-f7c59/logo_square/200.png" },
    { organisation: "clubmästeriet", org_logo_url: "https://www.roglebk.se/team_graphics/nef_shl/rbk1-rbk-539f1/logo_square/200.png" },
    { organisation: "webgroup", org_logo_url: "https://pbs.twimg.com/profile_images/500210368396816385/HzdAVBGq_400x400.png" },
    { organisation: "alumni", org_logo_url: "https://www.hv71.se/team_graphics/nef_shl/hv711-hv71-32ce9/logo_square/200.png" },
    { organisation: "näringslivsutskottet", org_logo_url: "https://pbs.twimg.com/profile_images/466315238/Farjestad_BK_twitter_400x400.gif" },
    { organisation: "styret", org_logo_url: "https://www.frolundaindians.com/team_graphics/nef_shl/fhc1-fhc-f7c59/logo_square/200.png" },
    { organisation: "clubmästeriet", org_logo_url: "https://www.roglebk.se/team_graphics/nef_shl/rbk1-rbk-539f1/logo_square/200.png" },
    { organisation: "webgroup", org_logo_url: "https://pbs.twimg.com/profile_images/500210368396816385/HzdAVBGq_400x400.png" },
    { organisation: "alumni", org_logo_url: "https://www.hv71.se/team_graphics/nef_shl/hv711-hv71-32ce9/logo_square/200.png" },
    { organisation: "näringslivsutskottet", org_logo_url: "https://pbs.twimg.com/profile_images/466315238/Farjestad_BK_twitter_400x400.gif" },
    { organisation: "styret", org_logo_url: "https://www.frolundaindians.com/team_graphics/nef_shl/fhc1-fhc-f7c59/logo_square/200.png" },
    { organisation: "clubmästeriet", org_logo_url: "https://www.roglebk.se/team_graphics/nef_shl/rbk1-rbk-539f1/logo_square/200.png" }
  ]; */ //Här ska info hämtas från db istället

  organisations: Observable<Organisation[]>;

  constructor(
    private organisationService: OrganisationService
  ) { }

  ngOnInit() {
    this.organisations = this.organisationService.listOrganisations()
  }
}
