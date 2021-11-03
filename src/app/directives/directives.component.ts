import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showPassword = false;
  clickLog: number[] = [];
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }

  passwordFlipper(){
    this.showPassword = !this.showPassword;
    
    this.clickLog.push(this.counter);
    this.counter ++;
  }

  higherThanFiveStyle(){
    return this.counter > 5? 'blue': 'white';
  }
  higherThanFiveClass(){
    return this.counter > 5;
  }

}
