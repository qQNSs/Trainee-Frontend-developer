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
  constructor(private activatedRoute: ActivatedRoute, private usersService:UsersServiseService) {
    this.id = activatedRoute.snapshot.params['id'];
   }
  
  ngOnInit(): void {
    let getusers = localStorage.getItem('Users');
    let users = JSON.parse(getusers);
    if(!Array.isArray(users) || users.length<=0){
      this.usersService.updateUsers();
      getusers = localStorage.getItem('Users');
      users = JSON.parse(getusers);
    }
    users.forEach(user => {
      if(user._id === this.id){
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


}
