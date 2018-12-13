import { Injectable } from '@angular/core';
import { DynamicFormField, SelectOption } from './dynamic-form.model';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../users/shared/user.service';
import { map } from 'rxjs/operators';
import { take } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  private readonly path = 'dynamic-forms';

  private usersSelectOptions: SelectOption[];

  constructor(
    private userService: UserService,
  ) { }

  getFormGroup(formFields: DynamicFormField<any>[]) {
    const group = {};

    formFields.forEach(formField => {
      group[formField.key] = new FormControl(formField.value);
    });

    return new FormGroup(group);
  }

  async getUsersSelectOptions(): Promise<SelectOption[]> {
    if (!this.usersSelectOptions) {
      return this.userService.listUsers().pipe(
        take(1),
        map(users => {
          const usersSelectOptions = users.map(user => {
            return {key: `${user.liu_id}`, value: user.id}; // TODO: Switch to `${user.first_name} ${user.last_name}`
          });
          this.usersSelectOptions = usersSelectOptions;
          return usersSelectOptions;
        })
      ).toPromise();
    } else {
      return this.usersSelectOptions;
    }
  }
}
