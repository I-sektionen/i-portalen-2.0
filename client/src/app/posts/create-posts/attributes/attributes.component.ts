import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';

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
  choosenCategories: any[];
  //categoryList: string[] = ['Artikel', 'Event', 'Annons', 'Workshop'];
  categoryList: any[] = [
    { name: 'Artikel', id: 1 },
    { name: 'Event', id: 2 },
    { name: 'Annons', id: 3 },
    { name: 'Workshop', id: 4 }
  ];

  constructor() {}

  ngOnInit() {}
}
