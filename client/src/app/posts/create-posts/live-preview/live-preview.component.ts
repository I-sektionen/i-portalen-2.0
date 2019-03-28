import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-live-preview',
  templateUrl: './live-preview.component.html',
  styleUrls: ['./live-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LivePreviewComponent implements OnInit {

  @Input() data: string;

  constructor() { }

  ngOnInit() {
  }
}