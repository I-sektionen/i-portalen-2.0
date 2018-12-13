import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { DynamicFormService } from '../shared/dynamic-form.service';
import { DynamicFormField } from '../shared/dynamic-form.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnChanges {

  @Input() formFields: DynamicFormField<any>[];
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

  submit() {
    this.ngSubmit.emit(this.form.value);
  }
}
