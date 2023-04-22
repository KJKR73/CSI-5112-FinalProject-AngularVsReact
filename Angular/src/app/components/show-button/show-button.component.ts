import { Component } from '@angular/core';

@Component({
  selector: 'app-show-button',
  templateUrl: './show-button.component.html',
  styleUrls: ['./show-button.component.css']
})
export class ShowButtonComponent {
  facebook: boolean = false;
  instagram: boolean = false;
  github: boolean = false;
  linkedin: boolean = false;
  qrCode : String = "";

  handleFacebook() {
    this.facebook = !this.facebook
  }

  handleInstagram() {
    this.instagram = !this.instagram
  }

  handleGithub() {
    this.github = !this.github
  }

  handleLinkedin() {
    this.linkedin = !this.linkedin
  }

  getQrCode(){
    console.log({
      "facebook" : this.facebook,
      "instagram" : this.instagram,
      "github" : this.github,
      "linkedin" : this.linkedin,
    })
    return this.qrCode = JSON.stringify({
      "facebook" : this.facebook,
      "instagram" : this.instagram,
      "github" : this.github,
      "linkedin" : this.linkedin,
    })
  }
}
