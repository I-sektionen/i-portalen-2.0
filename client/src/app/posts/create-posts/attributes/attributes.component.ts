import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  title: string;
  eventType: boolean = false;
  typeOne: string = 'Artikel';
  typeTwo: string = 'Event';
  postTypeIsArticle: boolean = true;
  ingress: string = '';

  constructor() {}

  ngOnInit() {}
}
