import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { Pipe, PipeTransform } from '@angular/core';

//import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:SharedService,public router: Router) { }
  
  ProductList:any=[];
  displayList:any=[];
  searchText:any;

  ngOnInit(): void {
    if(sessionStorage.getItem('currentUser'))
    {
      var user=JSON.parse(sessionStorage.getItem('currentUser')||'{}')
      var userName=JSON.parse(sessionStorage.getItem('userName')||'{}')
      if(userName=="admin")
      {
        this.router.navigate(['/adminhome']);

      }
      else{
      this.router.navigate(['/user/'+user.userId])
      }
    }
    this.refreshProductList();
  }

  async filterByCategory(category:any){
    if(category=='All')
    {
      this.displayList=this.ProductList;
    }
    else{
      this.displayList=this.ProductList;
      this.displayList = this.ProductList.filter((cat:any) => cat.category == category)

    }
  
}
  refreshProductList(){
    this.service.getProductList().subscribe(data=>{
      console.log(data);
      this.ProductList=data;
      this.displayList=data;
      
    })
  }

  addToCart(id:any){
    if(sessionStorage.getItem('currentUser'))
    {
    var product=this.ProductList.find((x:any) => x.id == id)
    this.service.addToCart(product);
    }
    else{
      this.router.navigate(['/login']);

    }
        
  }


  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.displayList = this.ProductList.sort((low:any, high:any) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.displayList = this.ProductList.sort((low:any, high:any) => high.price - low.price);
          break;
        }

      case "Name":
        {
          this.displayList = this.ProductList.sort(function (low:any, high:any) {
            if (low.name < high.name) {
              return -1;
            }
            else if (low.Nname > high.name) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.displayList = this.ProductList.sort((low:any, high:any) => low.price - high.price);
        break;
      }

    }
    return this.displayList;

  }

}
