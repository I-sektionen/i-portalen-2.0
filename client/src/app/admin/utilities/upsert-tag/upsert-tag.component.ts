import {Component, Input, OnInit} from '@angular/core';
import {Tag} from "../tags.service";

@Component({
  selector: 'app-upsert-tag',
  templateUrl: './upsert-tag.component.html',
  styleUrls: ['./upsert-tag.component.scss']
})
export class UpsertTagComponent implements OnInit {
  @Input() tag: Tag;
  constructor() { }

  ngOnInit() {
  }

}
