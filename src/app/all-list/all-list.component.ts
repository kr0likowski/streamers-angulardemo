import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent implements OnInit {
@Input() streamersArray: [{}];
  constructor() { }

  ngOnInit() {
  }

}
