import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { toDoList } from './model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent {
  toDoList: toDoList = {
    id: 1,
    title: '',
    description: '',
  };
  save() {}
}
