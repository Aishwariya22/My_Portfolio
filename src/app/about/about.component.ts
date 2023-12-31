import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  activeTab: string = 'skills';

  changeTab(tabName: string): void {
    this.activeTab = tabName;
  }
}
