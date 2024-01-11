import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HearderComponent } from './header/header.component';
import { TodolistComponent } from './main/todolist/todolist.component'
import { DidlistComponent } from './main/didlist/didlist.component'
import { TopHeaderComponent} from './top-header/top-header.component'
import { AddTaskComponent } from './main/add-task/add-task.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HearderComponent, TodolistComponent, DidlistComponent, TopHeaderComponent, AddTaskComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
