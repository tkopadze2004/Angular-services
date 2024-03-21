import { Component, ElementRef, Renderer2, ViewChild, inject,  } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  length = inject(UsersService);

  get seelength() {
    return this.length.userLength;
  }
}
