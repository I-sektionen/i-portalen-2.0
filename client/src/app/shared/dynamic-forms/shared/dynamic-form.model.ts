import {ValidatorFn} from '@angular/forms';

export interface SelectOption {
  label: any;
  value: any;
}

interface Options {
  // Default for all form fields
  order: number;
  label: string;
  key: string;
  value?: any;
  width?: number;
  validators?: ValidatorFn[];
  disabled?: boolean;

  // Specific for some form fields
  type?: string; // used by InputFormField
  selectOptions?: SelectOption[]; // used by DropdownFormField
  folder?: string; // Used by FileUploadFormField
  fileName?: string; // Used by FileUploadFormField
  color?: string; // Used by FormFields that can change colors.
  minDate?: Date; // Used by DatePickerFormField
  maxDate?: Date; // Used by DatePickerFormField
}

export class DynamicFormField {
  controlType: string;
  order: number;
  label: string;
  key: string;
  value: any;
  width: number;
  validators: ValidatorFn[];
  disabled: boolean;

  constructor(options: Options) {
    this.order = options.order;
    this.label = options.label;
    this.key = options.key;
    this.value = options.value;
    this.width = options.width || 100;
    this.validators = options.validators || [];
    this.disabled = options.disabled || false;
  }
}

export class InputFormField extends DynamicFormField {
  controlType = 'input';
  type: string;


  constructor(options: Options) {
    super(options);
    this.type = options['type'] || 'text';
  }
}

export class TextAreaFormField extends DynamicFormField {
  controlType = 'textarea';

  constructor(options: Options) {
    super(options);
  }
}

export class DropdownFormField extends DynamicFormField {
  controlType = 'dropdown';
  selectOptions: SelectOption[];

  constructor(options: Options) {
    super(options);
    this.selectOptions = options['selectOptions'] || [];
  }
}

export class RadioButtonFormField extends DynamicFormField {
  controlType = 'radio';
  selectOptions: SelectOption[];
  color: string;

  constructor(options: Options) {
    super(options);
    this.selectOptions = options['selectOptions'] || [];
    this.color = options['color'] || 'primary';
  }
}

export class FileUploadFormField extends DynamicFormField {
  controlType = 'fileupload';
  folder: string;
  fileName: string;
  color: string;

  constructor(options: Options) {
    super(options);
    this.folder = options['folder'] || 'files';
    this.fileName = options['fileName'];
    this.color = options['color'] || 'primary';
  }
}

export class DatePickerFormField extends DynamicFormField {
  controlType = 'datepicker';
  minDate: Date;
  maxDate: Date;

  constructor(options: Options) {
    super(options);
    this.minDate = options['minDate'];
    this.maxDate = options['maxDate'];
  }
}

export class ColorPickerFormField extends DynamicFormField {
  controlType = 'colorpicker';

  constructor(options: Options) {
    super(options);
  }
}

export abstract class DynamicForm {
  async abstract getDynamicFormFields(): Promise<DynamicFormField[]>;
}
