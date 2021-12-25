import {Component} from '@angular/core';
import {NbMenuItem, NbThemeService} from "@nebular/theme";

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

  constructor(private themeService: NbThemeService) {
  }

  toggleTheme(dark: boolean) {
    if (dark) {
      this.themeService.changeTheme("custom-dark")
    } else {
      this.themeService.changeTheme("custom-default")
    }
  }
}
