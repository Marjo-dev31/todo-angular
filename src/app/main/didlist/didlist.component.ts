import { Component } from '@angular/core';
import { TasklistComponent } from '../tasklist/tasklist.component';

@Component({
  selector: 'app-didlist',
  standalone: true,
  imports: [TasklistComponent],
  templateUrl: './didlist.component.html',
  styleUrl: './didlist.component.css'
})
export class DidlistComponent {

}
