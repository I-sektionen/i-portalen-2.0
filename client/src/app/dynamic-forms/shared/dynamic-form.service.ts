import {Injectable} from '@angular/core';
import {DynamicFormField, FileUploadFormField, SelectOption} from './dynamic-form.model';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../users/shared/user.service';
import {map, take} from 'rxjs/operators';
import {FireStorageService} from '../../core/firebase/fire-storage/fire-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  private usersSelectOptions: SelectOption[];

  constructor(
    private userService: UserService,
    private storageService: FireStorageService,
  ) { }

  getFormGroup(formFields: DynamicFormField[]) {
    const group = {};

    formFields.forEach(formField => {
      group[formField.key] = new FormControl(
      {value: formField.value, disabled: formField.disabled},
      {validators: formField.validators}
      );
    });

    return new FormGroup(group);
  }

  deleteOldFiles(formFields, newFormValue, oldFilesDownloadUrls) {
    formFields.forEach(formField => {
      if (formField instanceof FileUploadFormField && formField.value) {
        if (oldFilesDownloadUrls.indexOf(formField.value) > -1 && newFormValue[formField['key']] === formField.value) {
          oldFilesDownloadUrls.splice(oldFilesDownloadUrls.indexOf(formField.value), 1);
        }
      }
    });

    this.deleteFiles(oldFilesDownloadUrls);
  }

  deleteFiles(downloadUrls) {
    downloadUrls.forEach(downloadUrl => {
      this.storageService.deleteFile(downloadUrl);
    });
  }

  async getUsersSelectOptions(): Promise<SelectOption[]> {
    if (!this.usersSelectOptions) {
      return this.userService.listUsers(ref => ref.orderBy('liuId')).pipe(
        take(2),
        map(users => {
          const usersSelectOptions = users.map(user => {
            return {label: `${user.liuId}`, value: user.id}; // TODO Add firstName + lastName
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
