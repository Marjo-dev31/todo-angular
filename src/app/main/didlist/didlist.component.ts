import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-didlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './didlist.component.html',
  styleUrls: ['./didlist.component.css','../todolist/todolist.component.css']
})
export class DidlistComponent {
listOfTask: string[] = ['faire la vaiselle', 'réflechir à la sdb'];
}
