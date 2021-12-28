import { useAnimation } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiseService } from '../users-service/users-servise.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers:[UsersServiseService]
})
export class UsersComponent implements OnInit {

  title = 'app works!';
  users: any;
  subs:any;
  constructor(private usersService:UsersServiseService){
    // usersService.updateUsers();
  }

  ngOnInit(): void {
    localStorage.clear();
    console.log(localStorage.length)
    this.subs = this.usersService.getData()
    .subscribe(res => {
      console.log(res);
      this.users = res;
      
      localStorage.setItem("Users", JSON.stringify(this.users));
    
  });
  


}
ngOnDestroy(): void{
  if(this.subs) this.subs.unsubscribe();
}
}
