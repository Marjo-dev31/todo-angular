import { Component } from '@angular/core';
import { TasklistComponent } from '../tasklist/tasklist.component';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [TasklistComponent, ],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

}
