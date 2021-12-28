import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersServiseService } from '../users-service/users-servise.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  id:string;
  user:any;
  subs:any;
  
  constructor(private activatedRoute: ActivatedRoute, private usersService:UsersServiseService) {
    this.id = activatedRoute.snapshot.params['id'];
   }
  
  ngOnInit(): void {
    let getusers = localStorage.getItem('Users');
    let users = JSON.parse(getusers);
    if(!Array.isArray(users) || users.length<=0){
      this.subs = this.usersService.getData()
      .subscribe(res => {
        console.log(res);
        users = res;
        localStorage.setItem("Users", JSON.stringify(users));
        this.getUserById(users, this.id);
    });
    }else{
      this.getUserById(users, this.id);
    }  
  }

  private getUserById(users: any, id: string) {
    users.forEach(user => {
      if (user._id === id) {
        this.user = user;
      }
    });
    let date = new Date(this.user.registered);
    let MM = date.getMonth() + 1;
    let mm = MM < 10 ? '0' + MM : MM;
    let DD = date.getDate();
    let dd = DD < 10 ? '0' + DD : DD;
    let yyyy = date.getFullYear().toString();
    let HH = date.getHours();
    let hh = HH < 10 ? '0' + HH : HH;
    let MIN = date.getMinutes();
    let min = MIN < 10 ? '0' + MIN : MIN;

    this.user.registered = mm + "-" + dd + "-" + yyyy + " " + hh + ":" + min;
  }

  ngOnDestroy(): void{
    if(this.subs) this.subs.unsubscribe();
  }
}
