import { Component } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
  title = 'Event';
  showItems = false;

  constructor()
  {
   
    this.showItems = false;
  }

  toggleItems() {
    
    this.showItems = !this.showItems;
  }

  closeItems() {
    this.showItems = false;
  }

}
