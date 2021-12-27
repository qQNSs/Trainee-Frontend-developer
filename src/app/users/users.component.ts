import { useAnimation } from '@angular/animations';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiseService } from '../users-service/users-servise.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title = 'app works!';
  users: any;
  constructor(usersService:UsersServiseService){
    usersService.updateUsers();
  }

  ngOnInit(): void {
    let getusers = localStorage.getItem('Users');
    this.users = JSON.parse(getusers);
    
  }

}
