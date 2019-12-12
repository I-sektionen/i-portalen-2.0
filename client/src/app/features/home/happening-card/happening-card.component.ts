import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../posts/shared/post.model";

@Component({
  selector: 'happening-card',
  templateUrl: './happening-card.component.html',
  styleUrls: ['./happening-card.component.scss']
})
export class HappeningCardComponent implements OnInit {
  @Input("post") post: Post;

  constructor() { }

  ngOnInit() {
  }

}
