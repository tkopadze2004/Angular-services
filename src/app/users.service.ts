import { Injectable } from '@angular/core';

export interface User {
  name: string;
  lastname: string;
  email: string;
  birthdate: string;
  number: string;
}
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [];

  get adduser() {
    return this.users;
  }
  get userLength() {
    return this.users.length;
  }
  constructor() {}
  addUsers(user: User) {
    console.log('user is added');
    this.users.push(user);
  }
}
