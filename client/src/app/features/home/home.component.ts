import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
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
  choises = new FormControl();
  posts: Post[] = [];
  showedarticles: Post[] = [];
  lastarticle: DocumentSnapshot<any>;
  selected: any[] = [];
  choiseList: string[] = ['test1', 'test2'];
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
    this.tagService.listTags().subscribe(value => {this.tags = value; });
  }


  pagechange() {
    this.DB.list('posts', query => query.limit(25)).subscribe(value => {
      this.posts = value;
      this.showedarticles = value;
    });
  }

  isSelected(chip: any): boolean {
    return this.selected.indexOf(chip) >= 0;
  }

  toggleChip(chip: any): void {
    const i = this.selected.indexOf(chip);
    if (i >= 0) {
      this.selected.splice(i, 1);
    } else {
      this.selected.push(chip);
    }
  }
}



