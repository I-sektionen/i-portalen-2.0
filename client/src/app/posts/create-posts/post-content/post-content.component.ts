import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../../shared/post.model';

import * as SimpleMDE from 'simplemde';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent implements OnInit {
  @Output() postChange = new EventEmitter();
  @Input() post: Post;
  simplemde;

  constructor() {}

  ngOnInit() {
    this.simplemde = new SimpleMDE({
      element: document.getElementById('editor'),
      autofocus: true,
      hideIcons: ['fullscreen', 'link', 'side-by-side'],
      spellChecker: false
    });

    this.simplemde.codemirror.on('change', () => {
      this.post.text = this.simplemde.value();
      this.postChange.emit(this.post);
    });

    this.simplemde.value(this.post.text);
    this.postChange.emit(this.post);
  }

  onClick() {
    this.simplemde.togglePreview();
  }
}
