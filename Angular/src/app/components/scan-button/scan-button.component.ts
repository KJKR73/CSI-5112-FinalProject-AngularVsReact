import { Component } from '@angular/core';

@Component({
  selector: 'app-scan-button',
  templateUrl: './scan-button.component.html',
  styleUrls: ['./scan-button.component.css']
})
export class ScanButtonComponent {
  cameraState : Boolean = true;
  constructor() {
    this.cameraState = false;
  }
  
}
