import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  streamers = [{status: 'Online', name: 'Esl_csgo_pl', url: 'http://www.twitch.tv/esl_csgo_pl'},
    {status: 'Online', name: 'LCK1', url: 'http://www.twitch.tv/lck1'},
    {status: 'Offline', name: 'TimTheTatman', url: 'http://www.twitch.tv/timthetatman'},
    {status: 'Offline', name: 'gamertv_pl', url: 'http://www.twitch.tv/gamertv_pl'}];
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
