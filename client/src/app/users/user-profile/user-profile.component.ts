import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Observable } from 'rxjs/index';
import { User } from '../shared/user.model';
import {FormBuilder, FormGroup} from "@angular/forms";



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userObservable: Observable<User>;
  user:User;
  userInformation: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
  ) {
    this.userInformation = fb.group({
      'address':[''],
      'city':[''],
      'zip_code':[''],
      'allergies':[''],
      'newspaper':[false],
    });
  }

  ngOnInit() {
    //this.userObservable = this.userService.user;

    this.userService.user.subscribe(user =>
    {

      this.user = user;
      /*let keys = Object.keys(user);
     keys.forEach(attribute =>
     {
       this.userInformation.addControl(attribute, user[attribute]);
     })
*/
      this.userInformation.patchValue({'address': user.address});
      this.userInformation.patchValue({'newspaper': user.newspaper});
      this.userInformation.patchValue({'city': user.city});
      this.userInformation.patchValue({'zip_code': user.zip_code});
      this.userInformation.patchValue({'allergies': user.allergies});
    })
  }
}
