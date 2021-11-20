import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,private service:SharedService) { }
passwordMatch:boolean=true;


  ngOnInit(): void {
  }

  async register(registerData:any)
  {
    if(registerData.password==registerData.confirmPassword)
    {
      this.passwordMatch=true;
      await this.service.registerUser(registerData).subscribe(data=>{
        this.router.navigate(['/login']);
      });
    
    }
    else{
      this.passwordMatch=false;
    }

   
  }

}
