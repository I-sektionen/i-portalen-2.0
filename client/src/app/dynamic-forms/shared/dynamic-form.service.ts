import { Injectable } from '@angular/core';
import { DynamicFormField, SelectOption } from './dynamic-form.model';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../users/shared/user.service';
import { map, take } from 'rxjs/operators';

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
      group[formField.key] = new FormControl(formField.value, {validators: formField.validators});
    });

    return new FormGroup(group);
  }

  async getUsersSelectOptions(): Promise<SelectOption[]> {
    if (!this.usersSelectOptions) {
      return this.userService.listUsers(ref => ref.orderBy('liu_id')).pipe(
        take(2),
        map(users => {
          const usersSelectOptions = users.map(user => {
            return {key: `${user.liu_id}`, value: user.id};
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
