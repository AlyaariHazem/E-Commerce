import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginComponent } from '../../../components/public/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']  // Corrected from styleUrl to styleUrls
})
export class HeaderComponent implements OnChanges {

  isMenuActive: boolean = false;
  isAuth: boolean = false;

  constructor(private dialog: MatDialog) { }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  // This method checks authentication status (if needed)
  showlogin(): void {
    const login = localStorage.getItem('login');
    this.isAuth = (login === 'true');
  }

  // Call showlogin on changes if necessary
  ngOnChanges(changes: SimpleChanges): void {
    this.showlogin();
  }

  // Opens the login dialog when the login link is clicked
  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {  
      width: 'auto',  
      height: 'auto',  
      data: {}  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The login dialog was closed', result);
    });
  }
}
