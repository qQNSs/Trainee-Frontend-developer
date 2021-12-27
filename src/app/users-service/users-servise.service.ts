import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UsersServiseService {

  users :any;
  constructor(private http:HttpClient) {
    this.updateUsers();
       
  }
  updateUsers(){
    this.http.get('assets/users_json/users.json')
    .subscribe(res => {
      this.users = res;
      localStorage.setItem("Users", JSON.stringify(this.users))
   console.log(res);
   })
    
  }
}

