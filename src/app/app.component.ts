import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Portfolio';
    onMenu() {
    const sidemenu = document.getElementById("sidemenu");
    console.log("coming");
    if (sidemenu) {
      console.log("sidemenu")
      sidemenu.style.right = "0";
    }

  }
  public closeMenu() {
    const sidemenu = document.getElementById("sidemenu");
    if (sidemenu) {
      sidemenu.style.right = "-200px";
    }
  }
}
