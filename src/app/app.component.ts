import {Component} from '@angular/core';
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webxr';
  items: NbMenuItem[] = [
    {title: 'Business card', link: '/model-view'},
    {title: 'Chair', link: '/model-view/chair'}
  ];

  constructor() {
  }
}
