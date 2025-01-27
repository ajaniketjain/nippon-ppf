import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  mobileNumber: string = '';
  otp: string = '';
  isOtpSent: boolean = false;  // Flag to toggle between mobile number input and OTP input
  correctOtp: string = '123456';  // Hardcoded OTP for demonstration purposes

  constructor(private router: Router) {}

  // Handle mobile number submission and show OTP input field
  onSubmit() {
    if (this.mobileNumber) {
      // Simulate sending OTP (this would be an API call to an SMS service in a real app)
      console.log(`OTP sent to ${this.mobileNumber}`);
      localStorage.setItem('mobileNumber', this.mobileNumber);  // Store mobile number in local storage

      // Show OTP section and hide mobile number input
      this.isOtpSent = true;
    }
  }

  // Verify the OTP entered by the user
  onVerify() {
    if (this.otp === this.correctOtp) {
      console.log('OTP verified successfully');
      this.isOtpSent = false; 
      this.router.navigateByUrl('/');  // Navigate to the home page
    } else {
      console.log('Invalid OTP');
      // Show alert for invalid OTP (optional)
      alert('Invalid OTP. Please try again.');
    }
  }

  ngOnInit() {
    // Clear the input fields if any data exists in localStorage
    this.mobileNumber = '';  // Ensure the mobile number input is empty
    this.otp = '';  // Ensure the OTP input is empty
    this.isOtpSent = false;  // Reset OTP sent flag
  }
}
