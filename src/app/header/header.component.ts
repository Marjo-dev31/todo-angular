import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    standalone: true,
    styleUrls:['./header.component.css'],
//     styles: `
//     ul {
//     color: black; 
//     display: flex; 
//     justify-content: space-around;
//     font-weight: bold;
//     list-style: none;
// }
//     `
})

export class HearderComponent{
    title = 'todotest';
}
