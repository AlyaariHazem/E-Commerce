import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']  // Corrected from styleUrl to styleUrls
})
export class HeaderComponent implements OnChanges {

  isMenuActive: boolean = false;
  isAuth: boolean = false;
  router=inject(Router);

  constructor(private dialog: MatDialog) { }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  logout(): void {
  localStorage.removeItem('login');
  this.router.navigate(['/public']);
  } 
  
  ngOnChanges(changes: SimpleChanges): void {
    this.logout();
  }

}
