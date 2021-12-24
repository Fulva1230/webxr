import {Component, OnInit} from '@angular/core';
import {NbMenuItem, NbMenuService} from "@nebular/theme";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'webxr';
  items: NbMenuItem[] = [{ title: 'Business card' , link: '/model-view'}];

  constructor() {
  }
}
