import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar-login-page',
  templateUrl: './navbar-login-page.component.html',
  styleUrls: ['./navbar-login-page.component.css']
})
export class NavbarLoginPageComponent {
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
