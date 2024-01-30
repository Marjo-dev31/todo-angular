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
listOfTask: string[] = ['faire la vaiselle', 'restaurer la chaise'];

addDidTask(inputEl: HTMLInputElement){
this.listOfTask.push(inputEl.value)
inputEl.value = ''
}

delete(liEl: HTMLLIElement, event:any) {
liEl.remove()
event.target.remove()
}
}
