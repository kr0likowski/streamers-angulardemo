import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentComponent = 1;
  selectedTab: string;
  navbarClick(event) {
    switch (event.target.textContent) {
      case 'Online':
        console.log('Online Works!');
        this.currentComponent = 3;
        break;
      case 'Offline':
        console.log('Offline Works!');
        this.currentComponent = 2;
        break;
      case 'All Streamers(current)':
        console.log('All Works!');
        this.currentComponent = 1;
        break;
      default:
        console.log('LOL');
        break;
    }}
}
