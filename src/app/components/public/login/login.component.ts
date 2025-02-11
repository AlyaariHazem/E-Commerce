import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword = true;

  // Inject services using Angular's inject() helper
  router = inject(Router);
  dialogRef = inject(MatDialogRef<LoginComponent>);
  snackBar = inject(MatSnackBar);
  fb = inject(FormBuilder);

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Login: Check credentials against localStorage
  login(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      const storedUser = localStorage.getItem('registeredUser');

      if (storedUser) {
        const registeredUser: User = JSON.parse(storedUser);
        if (registeredUser.username === username && registeredUser.password === password) {
          localStorage.setItem('login', 'true');
          this.dialogRef.close();
          this.router.navigate(['/user']);
        } else {
          this.showMessage('Invalid credentials. Please try again.', 'error');
        }
      } else {
        this.showMessage('No registered user found. Please register first.', 'warning');
      }
    }
  }

  // Register: Save credentials to localStorage
  register(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      const userData: User = { username, password };
      localStorage.setItem('registeredUser', JSON.stringify(userData));
      this.showMessage('User registered successfully. You can now login.', 'success');
    }
  }

  // Display a snackbar message
  private showMessage(message: string, type: 'success' | 'error' | 'warning'): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: type
    });
  }
}
