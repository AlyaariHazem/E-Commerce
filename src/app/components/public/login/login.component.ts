import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface User {
  name: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = { name: '', password: '' };
  router = inject(Router);
  dialogRef = inject(MatDialogRef<LoginComponent>);
  snackBar = inject(MatSnackBar);

  // Login: Verify that the user exists and that the credentials match
  login(loginForm: any): void {
    if (loginForm.valid) {
      const { name, password } = this.user;
      // Retrieve the registered user from localStorage
      const registeredUserJson = localStorage.getItem('registeredUser');
      if (registeredUserJson) {
        const registeredUser: User = JSON.parse(registeredUserJson);
        if (registeredUser.name === name && registeredUser.password === password) {
          localStorage.setItem('login', 'true');
          this.dialogRef.close();
          this.router.navigate(['/user']);
        } else {
          this.snackBar.open('Invalid credentials. Please try again.', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
        }
      } else {
        this.snackBar.open('No registered user found. Please register first.', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    } else {
      this.snackBar.open('Please fill out all fields correctly.', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
  }

  // Register: Save the user's credentials to localStorage
  register(loginForm: any): void {
    if (loginForm.valid) {
      const { name, password } = this.user;
      // Save the user credentials as a JSON string in localStorage
      const userData: User = { name, password };
      localStorage.setItem('registeredUser', JSON.stringify(userData));
      this.snackBar.open('User registered successfully. You can now login.', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    } else {
      this.snackBar.open('Please fill out all fields correctly.', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
  }
}
