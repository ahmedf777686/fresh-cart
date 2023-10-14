import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdataService } from 'src/app/servise/productdata.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  constructor(private _ProductdataService:ProductdataService ){}
  brands:any=''
x:any=''
  ngOnInit(): void {
    this._ProductdataService.brands().subscribe({
      next:(res)=>{
        this.brands=res.data
  console.log(res.data);
  
      }
    })
  }
  
  getdetails(id:any){
  this._ProductdataService.brandsdetails(id).subscribe({
    next:(resp)=>{
  
     this.x= resp.data
     console.log(this.x);
     
      
    }
  })
  
  }
}