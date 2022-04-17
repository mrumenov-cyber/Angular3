import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
    allowNewServer=false;
    serverCreationStatus = "No server was created";
    serverName='Testserver';
    username="";
    serverCreated = "false";

    serverID: number = 10;
    serverStatus: string = 'offline';

    getServerStatus(){
      return this.serverStatus;
    }

    onCreateServer(){
      this.serverCreationStatus = "Server was created!" + this.serverName;
    }

    onUpdateServerName(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value;
    }


    UpdateUsername(event:Event){
      this.username = (<HTMLInputElement>event.target).value;
    }

    ResetValue(username){
      if(username !== "")
      { username = "";
      console.log(username);
      alert("Username is back to an empty value");
     }
      else{
        alert("Username is and empty string already");
      }
      console.log(username);

    }
}
