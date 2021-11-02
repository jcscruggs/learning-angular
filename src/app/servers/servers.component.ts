import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewSever = false;
  serverCreationStatus = 'no server was created';
  constructor() { 
    setTimeout(() => {
      this.allowNewSever = true;
    },2000)
  }

  ngOnInit(): void {
  }

}
