import { ValidatorFn } from '@angular/forms';

export interface SelectOption {
  label: any;
  value: any;
}

interface Options<T> {
  // Default for all form fields
  order: number;
  label: string;
  key: string;
  value?: T;
  width?: number;
  validators?: ValidatorFn[];
  disabled?: boolean;

  // Specific for some form fields
  type?: string; // used by InputFormField
  selectOptions?: SelectOption[]; // used by DropdownFormField
  folder?: string; // Used by FileUploadFormField
  fileName?: string;
  color?: string;
  minDate?: Date;
  maxDate?: Date;
}

export class DynamicFormField<T> {
  controlType: string;
  order: number;
  label: string;
  key: string;
  value: T;
  width: number;
  validators: ValidatorFn[];
  disabled: boolean;

  constructor(options: Options<T>) {
    this.order = options.order;
    this.label = options.label;
    this.key = options.key;
    this.value = options.value || null;
    this.width = options.width || 100;
    this.validators = options.validators || [];
    this.disabled = options.disabled || false;
  }
}

export class InputFormField extends DynamicFormField<string> {
  controlType = 'input';
  type: string;


  constructor(options: Options<string>) {
    super(options);
    this.type = options['type'] || 'text';
  }
}

export class TextAreaFormField extends DynamicFormField<string> {
  controlType = 'textarea';

  constructor(options: Options<string>) {
    super(options);
  }
}

export class DropdownFormField extends DynamicFormField<any> {
  controlType = 'dropdown';
  selectOptions: SelectOption[];

  constructor(options: Options<any>) {
    super(options);
    this.selectOptions = options['selectOptions'] || [];
  }
}

export class RadioButtonFormField extends DynamicFormField<any> {
  controlType = 'radio';
  selectOptions: SelectOption[];
  color: string;

  constructor(options: Options<any>) {
    super(options);
    this.selectOptions = options['selectOptions'] || [];
    this.color = options['color'] || 'primary';
  }
}

export class FileUploadFormField extends DynamicFormField<string> {
  controlType = 'fileupload';
  folder: string;
  fileName: string;
  color: string;

  constructor(options: Options<string>) {
    super(options);
    this.folder = options['folder'] || 'files';
    this.fileName = options['fileName'];
    this.color = options['color'] || 'primary';
  }
}

export class DatePickerFormField extends DynamicFormField<string> {
  controlType = 'datepicker';
  minDate: Date;
  maxDate: Date;

  constructor(options: Options<any>) {
    super(options);
    this.minDate = options['minDate'];
    this.maxDate = options['maxDate'];
  }
}

export abstract class DynamicForm {
  async abstract getDynamicFormFields(): Promise<DynamicFormField<any>[]>;
}
