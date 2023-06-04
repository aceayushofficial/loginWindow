import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar-register-page',
  templateUrl: './navbar-register-page.component.html',
  styleUrls: ['./navbar-register-page.component.css']
})

export class NavbarRegisterPageComponent {
  @ViewChild('sidenav') 
  sidenav!: MatSidenav;
  hovered = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hovered = true;
    this.sidenav.open();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hovered = false;
    this.sidenav.close();
  }
}