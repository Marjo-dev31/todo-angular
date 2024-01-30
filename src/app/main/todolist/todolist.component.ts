import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
listOfTask : string[] = []
task: string = ''

addTodoTask(inputEl: HTMLInputElement) {
this.task = inputEl.value
this.listOfTask.push(this.task)
inputEl.value = ''
}

delete(liEl: HTMLLIElement, event:any) {
  liEl.remove()
  event.target.remove()
  }
}


