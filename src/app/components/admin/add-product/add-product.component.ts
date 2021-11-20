import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service:SharedService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }
  addProduct(formProduct:any)
  {
      this.service.addProduct(formProduct).subscribe((data:any)=>{
      console.log("added successfully");
      this.router.navigate(['/adminhome'])
      
    })
  }
}
