import { Component, OnInit } from '@angular/core';

export interface Section {
  article: string;
  state: string;
}

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})

export class MyPostsComponent implements OnInit {
  articles: Section[] = [
    {
      article: 'Artikel 1',
      state: 'ok'
    },
    {
      article: 'Artikel 2',
      state: 'ej ok'
    },
    {
      article: 'Artikel 3',
      state: 'kommenterad'
    },
    {
      article: 'Artikel 4',
      state: 'ej ok'
    },
    {
      article: 'Artikel 5',
      state: 'kommenterad'
    },
    {
      article: 'Artikel 6',
      state: 'ok'
    },
    {
      article: 'Artikel 7',
      state: 'ok'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
