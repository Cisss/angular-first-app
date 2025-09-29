import { Component, computed, signal, Input, input, Output, output, EventEmitter } from '@angular/core';
import { type User } from './user.model';
// import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: false,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  // signal version
    // select = output<string>();
    // avatar = input.required<string>();
    // name = input.required<string>();

    // imagePath = computed(() => {
    //   return 'assets/users/' + this.avatar();
    // });

    // onSelectUser() {
    //   this.select.emit(this.id);
    // }
}
