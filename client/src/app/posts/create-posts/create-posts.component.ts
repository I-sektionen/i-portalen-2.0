import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-posts-create-posts",
  templateUrl: "./create-posts.component.html",
  styleUrls: ["./create-posts.component.scss"]
  // encapsulation: ViewEncapsulation.None
})
export class CreatePostsComponent implements OnInit {
  data: string;

  constructor() {}
  ngOnInit() {}

  dataChange(data) {
    this.data = data;
  }
}

// https://www.npmjs.com/package/simplemde
// https://github.com/markedjs/marked
