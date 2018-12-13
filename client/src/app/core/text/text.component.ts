import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs/index';
import { TextService } from './text.service';
import { Text } from './text.model';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() title: string;
  @Input() page: string;

  private id: string;

  textObservable: Observable<Text>;

  constructor(
    private textService: TextService,
  ) { }

  ngOnInit() {
    if (!this.page || !this.title) {
      console.error(`Wrong inputs to <app-text>. Correct usage:\n<app-text [page]="'pagename'" [title]="'titlename"></app-text>`);
    } else {
      this.id = `${this.page}-${this.title}`;
      this.textObservable = this.textService.getText(this.id, this.page);
    }
  }
}
