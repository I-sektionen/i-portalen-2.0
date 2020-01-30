import {Component, OnInit, Output, EventEmitter, Input, Inject} from '@angular/core';
import { Post } from '../../shared/post.model';

import * as SimpleMDE from 'simplemde';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



export interface DialogData {
  post: Post;
}

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent implements OnInit {
  @Output() postChange = new EventEmitter();
  @Input() post: Post;
  simplemde;

  constructor(public dialog: MatDialog) {}

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '550px',
      data: {post: this.post}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


}
