import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
  user:boolean=false;
  admin:boolean=false;
  userName:string="";
  constructor(private router: Router,public service:SharedService) { }
  ngOnInit(): void {
    
    }

   userLoggedIn(){
    this.userName=JSON.parse(sessionStorage.getItem('userName')||'null');

    if(this.userName!=null&&this.userName!='admin')
    {
      return true;
    }
    return false;
     
   }

   adminLoggedIn(){
    
    this.userName=JSON.parse(sessionStorage.getItem('userName')||'null');
  
    if(this.userName!=null&&this.userName=='admin')
    {
      return true;
    }

    return false;

   }
   
  logout(){
    this.service.logout();
    
  }
  title = 'capstoneAngular';
}
