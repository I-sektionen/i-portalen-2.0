import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.scss']
})
export class OrganisationsComponent implements OnInit {

  //@input
  organisations = ["Webgroup", "Alumni", "Näringslivsutskottet", "Styret","Clubmästeriet",
    "Webgroup", "Alumni", "Näringslivsutskottet", "Styret","Clubmästeriet",
    "Webgroup", "Alumni", "Näringslivsutskottet", "Styret","Clubmästeriet",
    "Webgroup", "Alumni", "Näringslivsutskottet", "Styret","Clubmästeriet",
    "Webgroup", "Alumni", "Näringslivsutskottet", "Styret","Clubmästeriet",
    "Webgroup", "Alumni", "Näringslivsutskottet"]; //Här ska info hämtas från db istället

  constructor() { }

  ngOnInit() {
  }

}
