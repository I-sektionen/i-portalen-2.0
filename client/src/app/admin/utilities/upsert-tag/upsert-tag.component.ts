import {Component, Input, OnChanges} from '@angular/core';
import {Tag, TagsService} from '../tags.service';
import {TagsDynamicFormService} from '../tags-dynamic-form.service';
import {DynamicFormField} from '../../../dynamic-forms/shared/dynamic-form.model';

@Component({
  selector: 'app-upsert-tag',
  templateUrl: './upsert-tag.component.html',
  styleUrls: ['./upsert-tag.component.scss']
})
export class UpsertTagComponent implements OnChanges {
  @Input() tag: Tag;
  tagFormFields: DynamicFormField[];

  constructor(private tagsService: TagsService,
              private tagDynamicFormService: TagsDynamicFormService) {
  }

  ngOnChanges() {
    this.tagDynamicFormService.getDynamicFormFields(this.tag).then(formFields => {
      this.tagFormFields = formFields;
    });
  }

  submit(tag: Tag) {
    if (this.tag) {
      this.tagsService.updateTag(tag);
    } else {
      this.tagsService.addTag(tag);
    }
  }

}
