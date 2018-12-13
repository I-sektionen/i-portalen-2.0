import { Component, Input, OnInit } from '@angular/core';
import { DynamicFormField } from '../shared/dynamic-form.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() formField: DynamicFormField<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
