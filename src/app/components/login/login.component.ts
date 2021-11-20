import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private service:SharedService) { }

  ngOnInit(): void {
    this.service.loginCorrect =true;
    
  }

  userList:any;

  async login(loginData:any)
  {
    
    await this.service.getUserList().subscribe(data=>{
    
      this.userList=data;
      this.service.login(this.userList,loginData);
     
    }) 
  }
  loginCorrect(){
    return this.service.loginCorrect;
  }

}
