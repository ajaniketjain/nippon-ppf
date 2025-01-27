import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy{

   // Called when the component is initialized (loaded)
   ngOnInit() {
    this.resetScanningState();
  }

  // Called when the component is destroyed (unloaded)
  ngOnDestroy() {
    this.resetScanningState();
  }

  // Method to reset scanning states
  resetScanningState() {
    this.isScanning = false;
    this.isScanned = false;
  }

  isScanning = false;  // State for simulating scanning
  isScanned = false;   // State for showing scanned data

  constructor() {}

  onScanClick() {
    // Start scanning process
    this.isScanning = true;
    this.isScanned = false;

    // Simulate a fake scanning process (3 seconds delay)
    setTimeout(() => {
      // After 3 seconds, stop scanning and show scanned data
      this.isScanning = false;
      this.isScanned = true;
    }, 3000); // 3-second delay
  }

}
