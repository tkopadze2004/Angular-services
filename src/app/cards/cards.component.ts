import { Component, inject } from '@angular/core';
import { UsersService } from '../users.service';
import {JsonPipe,  TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [JsonPipe, TitleCasePipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  userService = inject(UsersService);

  get users() {
    return this.userService.users;
  }
  delete(index : number){
    this.users.splice(index,1)
  }
}
