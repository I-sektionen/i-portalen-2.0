import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/index';
import { TextService } from './text.service';
import { Text } from './text.model';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnChanges {

  @Input() title: string;
  @Input() page: string;

  private id: string;

  textObservable: Observable<Text>;

  constructor(
    private textService: TextService,
  ) { }

  ngOnChanges() {
    this.id = `${this.page}-${this.title}`;
    this.textObservable = this.textService.getText(this.id, this.page);
  }
}
