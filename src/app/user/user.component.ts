import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  constructor(){
  }
  id = 0;
  selectedUser = signal(DUMMY_USERS[this.id]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectUser() {
    if(this.id < DUMMY_USERS.length - 1) {
      this.id++;
      this.selectedUser.set(DUMMY_USERS[this.id]);
      console.log(this.id);
    } else {
      this.id = 0;
      this.selectedUser.set(DUMMY_USERS[this.id]);
    }
  }
}
