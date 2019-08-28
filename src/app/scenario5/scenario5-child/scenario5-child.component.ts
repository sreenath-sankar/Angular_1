import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-child',
  templateUrl: './scenario5-child.component.html',
  styleUrls: ['./scenario5-child.component.css']
})
export class Scenario5ChildComponent implements OnInit {

  @Output() public ChildEvent = new EventEmitter();
  fireEvent(message){
    this.ChildEvent.emit(message);
  }
  constructor() { }

  ngOnInit() {
  }

}
