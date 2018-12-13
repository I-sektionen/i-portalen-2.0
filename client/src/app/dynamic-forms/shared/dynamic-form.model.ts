export interface SelectOption {
  key: string;
  value: any;
}

interface Options<T> {
  // Default for all form fields
  label: string;
  key: string;
  value?: T;
  order: number;
  width?: number;
  required?: boolean;

  // Specific for some form fields
  type?: string; // used by InputFormField
  selectOptions?: SelectOption[]; // used by DropdownFormField
}

export class DynamicFormField<T> {
  controlType: string;
  label: string;
  key: string;
  value: T;
  order: number;
  width: number;
  required: boolean;

  constructor(options: Options<T>) {
    this.label = options.label;
    this.key = options.key;
    this.value = options.value || null;
    this.order = options.order === undefined ? 1 : options.order;
    this.width = options.width || 100;
    this.required = !!options.required;
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

export class DropdownFormField extends DynamicFormField<string> {
  controlType = 'dropdown';
  selectOptions: SelectOption[];

  constructor(options: Options<string>) {
    super(options);
    this.selectOptions = options['selectOptions'] || [];
  }
}

export interface DynamicForm {
  getDynamicFormFields(): Promise<DynamicFormField<any>[]>;
}
