import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario4-child',
  templateUrl: './scenario4-child.component.html',
  styleUrls: ['./scenario4-child.component.css']
})
export class Scenario4ChildComponent implements OnInit {

  public textinput="";
  @Output() public ChildEvent = new EventEmitter();
  fireEvent(value){
    this.ChildEvent.emit(value);
  }
  public name="";
  constructor() { }

  ngOnInit() {
  }

}
