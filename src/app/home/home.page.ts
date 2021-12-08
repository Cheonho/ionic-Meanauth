import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onLogout() {
    localStorage.removeItem('userNoPW');
    localStorage.removeItem('authToken');
    this.router.navigate(['login']);
  }

  checkLoggedIn(): boolean {
    return this.authService.loggedIn();
  }
}
