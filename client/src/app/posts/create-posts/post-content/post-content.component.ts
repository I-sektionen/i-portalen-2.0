import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import * as SimpleMDE from "simplemde";

@Component({
  selector: "app-post-content",
  templateUrl: "./post-content.component.html",
  styleUrls: ["./post-content.component.scss"]
})
export class PostContentComponent implements OnInit {
  @Output() dataChange = new EventEmitter();
  data: string;
  simplemde;

  constructor() {}

  ngOnInit() {
    this.simplemde = new SimpleMDE({
      element: document.getElementById("editor"),
      autofocus: true,
      hideIcons: ["fullscreen", "link", "side-by-side"],
      spellChecker: false
    });

    this.simplemde.codemirror.on("change", () => {
      this.data = this.simplemde.value();
      this.dataChange.emit(this.data);
    });
    this.data = this.simplemde.value(); // OnInit
  }

  onClick() {
    this.simplemde.togglePreview();
  }
}
