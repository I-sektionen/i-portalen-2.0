import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DatabaseService} from "../core/database/database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filter: FormGroup;
  articles: Array<article>;
  showedarticles: Array<article> = [];

  constructor(FB: FormBuilder, DB: DatabaseService<article>) {
    // Just for testing, put in seperate service in future
    DB.list('articles').subscribe(value => {
      this.articles = value;
      this.showedarticles = value;
    });
    this.filter = FB.group({
      'search': ['']
    });


  }

  ngOnInit() {
    // Search draft
    this.filter.valueChanges
      .subscribe(value => {
        this.showedarticles = [];
        this.articles.forEach((article => {
          if (article['name'].includes(value['search'])) {
            this.showedarticles.push(article);
          }
        }));
      });
  }

}

// Just for testing, put in diffrent file
export interface article {
  name: string
}
