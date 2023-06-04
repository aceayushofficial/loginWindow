import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'loginWindow';
  constructor(private router: Router) { }
  navigateToLink() {
    // this.router.navigate(['']); // Replace '/your-link' with the desired link
    const externalUrl = 'https://www.youtube.com'; // Replace with the desired external URL
    window.open(externalUrl, '_blank')
  }

  navigateToHome(){
    const button = document.querySelector('.login-button');
    button?.classList.add('clicked');
    button?.setAttribute('disabled', 'true');

    setTimeout(() => {
      button?.classList.remove('clicked');
      button?.removeAttribute('disabled');
    }, 2000);

    // const externalUrl = 'https://www.google.com';
    // window.open(externalUrl, '_blank')
  }

}
