import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdataService } from 'src/app/servise/productdata.service';
import { Root, cat } from 'src/app/interface/product';
import { TextPipe } from 'src/app/pipes/text.pipe';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartdataService } from 'src/app/servise/cartdata.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { share } from 'rxjs';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { WishlistService } from 'src/app/servise/wishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,TextPipe,CarouselModule,RouterLink,FormsModule,SearchPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
constructor(private _ProductdataService:ProductdataService,private _CartdataService:CartdataService,private _ToastrService:ToastrService,private _Renderer2:Renderer2,private _WishlistService:WishlistService){}
category:any=''
allpro:Root[] =[]
search:string=''
backdata:string[]=[]
ngOnInit(): void {
  console.log('hi');
  this._WishlistService.getwish().subscribe({
    next:(res)=>{
      let newdata= res.data.map((res:any)=>res._id)
      this.backdata=newdata
console.log(newdata);

    }
  })
  this._ProductdataService.getallproducts().subscribe({
    next:(res)=>{
      this.allpro=res.data
// console.log(res.data);

    }
  })

  this._ProductdataService.category().subscribe({
    next:(res)=>{
      this.category=res.data
// console.log(res.data);

    }
  })

}

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  autoplay:true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}
slidercat: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
items:1,
autoplay:true
  
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

addwish(id:any){
    this._WishlistService.addwish(id).subscribe({
next:(res)=>{
  this._ToastrService.success(res.message)
  this.backdata=res.data
  console.log(res);
  
  this._ProductdataService.countwish.next(res.data.length)



}
    })
}

remove(id:any):void{
  this._WishlistService.removewish(id).subscribe({
    next:(res)=>{
      this._ToastrService.success(res.message)
     this.backdata=res.data
     this._ProductdataService.countwish.next(res.data.length)
console.log( this.backdata);

    }
  })
}


}
