import {Component, OnInit} from '@angular/core';
import * as SimpleMDE from "simplemde";

@Component({
  selector: 'app-posts-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss'],
 // encapsulation: ViewEncapsulation.None
})
export class CreatePostsComponent implements OnInit {

  simplemde;
  data;

  constructor() {
  }

  ngOnInit() {
    this.simplemde = new SimpleMDE({
      element: document.getElementById("editor"),
      autofocus: true,
      hideIcons: ["fullscreen", "link", "side-by-side"],
      spellChecker: false,

    });

    this.simplemde.codemirror.on("change", () => {
      this.data = this.simplemde.value();
    });
    this.data = this.simplemde.value(); // OnInit
  }

  onClick(){
    this.simplemde.togglePreview();
  }
}

// https://www.npmjs.com/package/simplemde
// https://github.com/markedjs/marked
