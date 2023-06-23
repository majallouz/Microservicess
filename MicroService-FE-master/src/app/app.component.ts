import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'MicroService-FE';

  constructor(public authService:AuthService) {
    if (!this.authService.isLoggedIn) {
      window.location.href = '/#/login'
    }
  }

  logout() {
    this.authService.isLoggedIn = false
    window.location.href = '/#/login'
  }
}

