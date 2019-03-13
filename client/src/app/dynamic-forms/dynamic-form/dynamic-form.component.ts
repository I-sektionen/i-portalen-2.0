import { Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { DynamicFormService } from '../shared/dynamic-form.service';
import { DynamicFormField, FileUploadFormField } from '../shared/dynamic-form.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnChanges, OnDestroy {

  oldFilesDownloadUrls = [];
  newFilesDownloadUrls = [];
  @Input() formFields: DynamicFormField[];
  @Input() editing: boolean;
  @Input() title: string;
  @Output() ngSubmit: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;

  constructor(
    private dynamicFormService: DynamicFormService,
  ) { }

  ngOnChanges() {
    if (this.formFields) {
      // Sort based on order
      this.formFields.sort((a, b) => a.order - b.order);

      // Get form group
      this.form = this.dynamicFormService.getFormGroup(this.formFields);
    }
  }

  // TODO: Handle refresh or new website?
  ngOnDestroy() {
    this.dynamicFormService.deleteFiles(this.newFilesDownloadUrls);
  }

  submit() {
    const newFormValue = this.form.value;

    // Clean up old files
    this.dynamicFormService.deleteOldFiles(this.formFields, newFormValue, this.oldFilesDownloadUrls);
    this.oldFilesDownloadUrls = [];
    this.newFilesDownloadUrls = [];

    this.ngSubmit.emit(newFormValue);
  }
}
