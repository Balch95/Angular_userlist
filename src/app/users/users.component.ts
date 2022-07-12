import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  {

  users:string[] = [];

  addUser(userName: string){
    this.users.push(userName);
    console.log(this.users)
  }

  
}
