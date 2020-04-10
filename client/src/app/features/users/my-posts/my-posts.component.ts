import {Component, OnInit} from '@angular/core';
import {Post} from '../../posts/shared/post.model';
import {PostStatus} from '../../posts/shared/post-status.enum';
import {PostService} from '../../posts/shared/post.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})

export class MyPostsComponent implements OnInit {
  filter: FormGroup;
  articles: Post[];

  tags = [{tag: 'Lit'}, {tag: 'Sellout'}, {tag: 'AlbinSkaGå'}, {
    tag: 'Dead'
  }];

  constructor(private FB: FormBuilder, private postService: PostService) {
    // Just for testing, put in seperate service in future
    this.postService.list(PostStatus.Public).subscribe((result: Post[]) => {
      console.log(result);
      this.articles = result;
    });
    this.filter = FB.group({
      'search': ['']
    });
  }

  ngOnInit() {
  }

}

