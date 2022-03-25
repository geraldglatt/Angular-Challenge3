import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : "L'avenir appartient aux audacieux !!!",
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }
  isDisplay: boolean = false;
  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }



}

