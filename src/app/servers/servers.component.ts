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
  servercreated=false;
  servers = ['Testserver','Testserver2'];
  constructor() { 
    setTimeout(() => {
      this.allowNewSever = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    
    this.servercreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created name is ' + this.serverName;
  }

  

}
