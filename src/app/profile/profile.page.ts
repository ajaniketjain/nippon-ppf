import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router) { }

  
  // Signout logic
  onSignOut() {
    console.log('Logging out...');
    localStorage.removeItem('mobileNumber');  // Remove the mobile number
    localStorage.removeItem('otp');  // Remove the OTP if necessary
    this.router.navigateByUrl('/login');  // Redirect to login page
  }

  ngOnInit() {
  }

}
