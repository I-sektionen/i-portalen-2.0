import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.scss']
})
export class OrganisationsComponent implements OnInit {


  organisations = ["org1", "org2", "org3", "org4","org5", "org6", "org7"];

  constructor() { }

  ngOnInit() {
  }

}
