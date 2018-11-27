import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.scss']
})
export class OrganisationsComponent implements OnInit {

  //@input
  organisations = [
    { organisation: "Webgroup", org_logo_url: "https://pbs.twimg.com/profile_images/500210368396816385/HzdAVBGq_400x400.png" },
    { organisation: "Alumni", org_logo_url: "https://www.hv71.se/team_graphics/nef_shl/hv711-hv71-32ce9/logo_square/200.png" },
    { organisation: "Näringslivsutskottet", org_logo_url: "https://pbs.twimg.com/profile_images/466315238/Farjestad_BK_twitter_400x400.gif" },
    { organisation: "Styret", org_logo_url: "https://www.frolundaindians.com/team_graphics/nef_shl/fhc1-fhc-f7c59/logo_square/200.png" },
    { organisation: "Clubmästeriet", org_logo_url: "https://www.roglebk.se/team_graphics/nef_shl/rbk1-rbk-539f1/logo_square/200.png" },
    { organisation: "Webgroup", org_logo_url: "https://pbs.twimg.com/profile_images/500210368396816385/HzdAVBGq_400x400.png" },
    { organisation: "Alumni", org_logo_url: "https://www.hv71.se/team_graphics/nef_shl/hv711-hv71-32ce9/logo_square/200.png" },
    { organisation: "Näringslivsutskottet", org_logo_url: "https://pbs.twimg.com/profile_images/466315238/Farjestad_BK_twitter_400x400.gif" },
    { organisation: "Styret", org_logo_url: "https://www.frolundaindians.com/team_graphics/nef_shl/fhc1-fhc-f7c59/logo_square/200.png" },
    { organisation: "Clubmästeriet", org_logo_url: "https://www.roglebk.se/team_graphics/nef_shl/rbk1-rbk-539f1/logo_square/200.png" },
    { organisation: "Webgroup", org_logo_url: "https://pbs.twimg.com/profile_images/500210368396816385/HzdAVBGq_400x400.png" },
    { organisation: "Alumni", org_logo_url: "https://www.hv71.se/team_graphics/nef_shl/hv711-hv71-32ce9/logo_square/200.png" },
    { organisation: "Näringslivsutskottet", org_logo_url: "https://pbs.twimg.com/profile_images/466315238/Farjestad_BK_twitter_400x400.gif" },
    { organisation: "Styret", org_logo_url: "https://www.frolundaindians.com/team_graphics/nef_shl/fhc1-fhc-f7c59/logo_square/200.png" },
    { organisation: "Clubmästeriet", org_logo_url: "https://www.roglebk.se/team_graphics/nef_shl/rbk1-rbk-539f1/logo_square/200.png" },
    { organisation: "Webgroup", org_logo_url: "https://pbs.twimg.com/profile_images/500210368396816385/HzdAVBGq_400x400.png" },
    { organisation: "Alumni", org_logo_url: "https://www.hv71.se/team_graphics/nef_shl/hv711-hv71-32ce9/logo_square/200.png" },
    { organisation: "Näringslivsutskottet", org_logo_url: "https://pbs.twimg.com/profile_images/466315238/Farjestad_BK_twitter_400x400.gif" },
    { organisation: "Styret", org_logo_url: "https://www.frolundaindians.com/team_graphics/nef_shl/fhc1-fhc-f7c59/logo_square/200.png" },
    { organisation: "Clubmästeriet", org_logo_url: "https://www.roglebk.se/team_graphics/nef_shl/rbk1-rbk-539f1/logo_square/200.png" },
    { organisation: "Webgroup", org_logo_url: "https://pbs.twimg.com/profile_images/500210368396816385/HzdAVBGq_400x400.png" },
    { organisation: "Alumni", org_logo_url: "https://www.hv71.se/team_graphics/nef_shl/hv711-hv71-32ce9/logo_square/200.png" },
    { organisation: "Näringslivsutskottet", org_logo_url: "https://pbs.twimg.com/profile_images/466315238/Farjestad_BK_twitter_400x400.gif" },
    { organisation: "Styret", org_logo_url: "https://www.frolundaindians.com/team_graphics/nef_shl/fhc1-fhc-f7c59/logo_square/200.png" },
    { organisation: "Clubmästeriet", org_logo_url: "https://www.roglebk.se/team_graphics/nef_shl/rbk1-rbk-539f1/logo_square/200.png" },
    { organisation: "Webgroup", org_logo_url: "https://pbs.twimg.com/profile_images/500210368396816385/HzdAVBGq_400x400.png" },
    { organisation: "Alumni", org_logo_url: "https://www.hv71.se/team_graphics/nef_shl/hv711-hv71-32ce9/logo_square/200.png" },
    { organisation: "Näringslivsutskottet", org_logo_url: "https://pbs.twimg.com/profile_images/466315238/Farjestad_BK_twitter_400x400.gif" },
    { organisation: "Styret", org_logo_url: "https://www.frolundaindians.com/team_graphics/nef_shl/fhc1-fhc-f7c59/logo_square/200.png" },
    { organisation: "Clubmästeriet", org_logo_url: "https://www.roglebk.se/team_graphics/nef_shl/rbk1-rbk-539f1/logo_square/200.png" }
  ]; //Här ska info hämtas från db istället
  constructor() { }

  ngOnInit() {
  }

}
