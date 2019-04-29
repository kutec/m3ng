import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;

   constructor(private userService: ApiService) {
      this.users = userService.getAPIData('users');
   }

  ngOnInit() {}

}
