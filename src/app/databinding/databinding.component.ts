import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  username = "";

  constructor() { }

  ngOnInit(): void {
  }

  removeName(){
    this.username = "";
  }

  isEmpty(){
    if(this.username.length == 0){
      return true;
    }else{
      return false;
    }
  }



}
