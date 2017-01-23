import {Component} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    sessionStorage.setItem("user", "fuchs");
    sessionStorage.setItem("password", "password");
  }
}
