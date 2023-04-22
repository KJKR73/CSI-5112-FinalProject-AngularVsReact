import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-qr-code',
  templateUrl: './show-qr-code.component.html',
  styleUrls: ['./show-qr-code.component.css']
})
export class ShowQrCodeComponent {
  @Input() data: string;
  EncodedString: string = "";
  constructor () {
    this.data = "";
  }
  ngOnInit() {
    this.EncodedString = this.data;
  }
}
