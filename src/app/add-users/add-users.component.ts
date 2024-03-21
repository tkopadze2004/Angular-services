import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User, UsersService } from '../users.service';

@Component({
  selector: 'app-add-users',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.scss',
})
export class AddUsersComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthdate: new FormControl('', [Validators.required, this.age]),
    number: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  age(control: AbstractControl): any {
    const birthdate = new Date(control.value);
    const age = new Date().getFullYear() - birthdate.getFullYear();
    return age >= 18 ? null : { age: true };
  }
  service = inject(UsersService);
  submit() {
    console.log(this.form.value);
    this.form.markAllAsTouched();
    this.service.addUsers(this.form.value as User);
  }
}
