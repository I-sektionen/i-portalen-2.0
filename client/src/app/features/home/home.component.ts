import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DatabaseService} from '../../core/database/database.service';
import { Router } from '@angular/router';
import {MatPaginatorIntl} from '@angular/material';
import {DocumentSnapshot} from '@angular/fire/firestore';
import {Post} from '../posts/shared/post.model';
import {Tag, TagsService} from '../admin/utilities/tags.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filter: FormGroup;
  posts: Post[];
  showedarticles: Post[] = [];
  lastarticle: DocumentSnapshot<any>;

  tags: Tag[] = [];
  console: any;

  constructor(private FB: FormBuilder,
              private DB: DatabaseService<Post>,
              private tagService: TagsService) {
    // Just for testing, put in seperate service in future
    DB.list('posts', query => query.limit(25)).subscribe(posts_from_database => {
      this.posts = posts_from_database;
      this.showedarticles = posts_from_database;
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
        this.posts.forEach((post => {
          if (post.title.toLowerCase().includes(value['search'].toLowerCase())) {
            this.showedarticles.push(post);
          }
        }));
      });



    this.tagService.listTags().subscribe(value => {this.tags = value; console.log(value); });
  }


  pagechange() {
    this.DB.list('posts', query => query.limit(25)).subscribe(value => {
      this.posts = value;
      this.showedarticles = value;
    });
  }
}
