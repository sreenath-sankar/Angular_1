import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-grandchild',
  templateUrl: './scenario5-grandchild.component.html',
  styleUrls: ['./scenario5-grandchild.component.css']
})
export class Scenario5GrandchildComponent implements OnInit {

  public textinput="";
  @Output() public ChildEvent = new EventEmitter();
  fireEvent(value){
    this.ChildEvent.emit(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
