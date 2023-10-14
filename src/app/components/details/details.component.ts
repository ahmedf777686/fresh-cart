import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductdataService } from 'src/app/servise/productdata.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartdataService } from 'src/app/servise/cartdata.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
constructor(private _ActivatedRoute:ActivatedRoute,
  private _ProductdataService:ProductdataService,
  private _Renderer2:Renderer2,
  private _CartdataService:CartdataService,
  private _ToastrService:ToastrService,
  
  
  
  
  ){}
detailsId:any=''
datailsdata:any=''
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(res)=>{
console.log(res.get('id'));
this.detailsId=res.get('id')

    }
  })

this._ProductdataService.detailsdata(this.detailsId).subscribe({
  next:(respons)=>{
    this.datailsdata=respons.data
console.log(respons.data);

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

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  items:1,
  autoplay:true,
  navSpeed: 700,
  navText: ['', ''],

  nav: true
}
}
