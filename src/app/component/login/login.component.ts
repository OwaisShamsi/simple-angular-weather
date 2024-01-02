import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username?: string;
  password?: string;
  showErrorMessage = false;
  errorMessage = '';
  successMessage = '';
  showSuccessMessage = false;

  constructor(private router: Router) {}

  onSubmit() {
    const users = JSON.parse(localStorage.getItem('users')!);
    console.log(users);

    const user = users.find(
      (u: any) => u.username === this.username && u.password === this.password
    );
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.showSuccess('Login successful! Redirecting you in 2 seconds');
    } else {
      this.showError('Error Occured!');
    }
  }

  showError(message: string) {
    this.errorMessage = message;
    this.showErrorMessage = true;

    setTimeout(() => {
      this.closeError();
    }, 2000);
  }

  showSuccess(message: string) {
    this.successMessage = message;
    this.showSuccessMessage = true;

    setTimeout(() => {
      this.closeError();
      this.router.navigate(['home']);
    }, 2000);
  }

  closeError() {
    this.showErrorMessage = false;
    this.errorMessage = '';
  }
}
