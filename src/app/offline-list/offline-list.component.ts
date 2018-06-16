import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-offline-list',
  templateUrl: './offline-list.component.html',
  styleUrls: ['./offline-list.component.css']
})
export class OfflineListComponent implements OnInit {
  @Input() streamersArray: [{}];
  constructor() { }

  ngOnInit() {
  }

}
