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
  ngOnInit() {
    //Pre-filled text
    this.data =
      "![](https://i.imgur.com/99onY9r.jpg)\n\n# This is a header\n\n**This is bold text**\n\n*This is italic text*\n\n> This is a quote.\n> It can span multiple lines!\n\n1. Numbered list item\n2. Numbered list item\n3. Numbered list item";
  }

  dataChange(data) {
    this.data = data;
  }
}

// https://www.npmjs.com/package/simplemde
// https://github.com/markedjs/marked
