import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-scenario6-child1',
  templateUrl: './scenario6-child1.component.html',
  styleUrls: ['./scenario6-child1.component.css']
})
export class Scenario6Child1Component implements OnInit {

  public textinput="";
  @Output() public ChildEvent = new EventEmitter();
  fireEvent(value){
    this.ChildEvent.emit(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
