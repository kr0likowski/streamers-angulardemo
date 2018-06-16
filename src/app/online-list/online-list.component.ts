import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-online-list',
  templateUrl: './online-list.component.html',
  styleUrls: ['./online-list.component.css']
})
export class OnlineListComponent implements OnInit {
  @Input() streamersArray: [{}];
  constructor() { }

  ngOnInit() {
  }

}
