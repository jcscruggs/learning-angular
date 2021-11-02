import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewSever = false;
  serverCreationStatus = 'no server was created';
  serverName = "";
  constructor() { 
    setTimeout(() => {
      this.allowNewSever = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'server was created name is ' + this.serverName;
  }

  

}
