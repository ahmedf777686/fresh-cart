import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdataService } from 'src/app/servise/productdata.service';
import { Root } from 'src/app/interface/product';
import { ToastrService } from 'ngx-toastr';
import { CartdataService } from 'src/app/servise/cartdata.service';
import { TextPipe } from 'src/app/pipes/text.pipe';
import { RouterLink } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'; 
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,TextPipe,RouterLink,NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allpro:Root[] =[]
  pageSize:number=0
  x:number=0
  total:number=0
  constructor(private _ProductdataService:ProductdataService,private _CartdataService:CartdataService,private _ToastrService:ToastrService,private _Renderer2:Renderer2){}

ngOnInit(): void {
  this._ProductdataService.getallproducts().subscribe({
    next:(res)=>{
      this.allpro=res.data
      this.pageSize=res.metadata.limit
      this.x=res.metadata.currentPage
      this.total=res.results
// console.log(res.data);

    }
  })

}
addtocart(id:any,btn:HTMLButtonElement){
  this._Renderer2.setAttribute(btn,'disabled','true')
this._CartdataService.Addtocart(id).subscribe({
  next:(res)=>{
    this._CartdataService.countnav.next(res.numOfCartItems)

this._ToastrService.success(res.message)
this._Renderer2.removeAttribute(btn,'disabled')
// message
// : 
// "Product added successfully to your cart"
  }
})
}
pageChanged(event:any){
  this._ProductdataService.getallproducts(event).subscribe({
    next:(res)=>{
      this.allpro=res.data
      this.pageSize=res.metadata.limit
      this.x=res.metadata.currentPage
      this.total=res.results
// console.log(res.data);

    }
  })
}
}
