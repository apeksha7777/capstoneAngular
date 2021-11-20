import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private service:SharedService,public router: Router) { }
  
  ProductList:any=[];

  ngOnInit(): void {
    this.refreshProductList();
  }
  refreshProductList(){
    this.service.getProductList().subscribe(data=>{
      console.log(data);
      this.ProductList=data;
    })
  }

}
