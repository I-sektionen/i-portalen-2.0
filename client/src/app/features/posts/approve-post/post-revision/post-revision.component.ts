import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post-revision',
  templateUrl: './post-revision.component.html',
  styleUrls: ['./post-revision.component.scss']
})
export class PostRevisionComponent implements OnInit {
  revisionForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.revisionForm = this.fb.group({
      'comments': ['']
    });
  }

}
