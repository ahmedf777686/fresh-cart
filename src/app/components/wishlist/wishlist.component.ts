import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Root } from 'src/app/interface/product';
import { TextPipe } from 'src/app/pipes/text.pipe';
import { CartdataService } from 'src/app/servise/cartdata.service';
import { ProductdataService } from 'src/app/servise/productdata.service';
import { WishlistService } from 'src/app/servise/wishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule,RouterLink,TextPipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
constructor(private _WishlistService:WishlistService,
  private _ToastrService:ToastrService,
  private _Renderer2:Renderer2,
  private _CartdataService:CartdataService,
  private _ProductdataService:ProductdataService
  
  
  
  ){}
  allpro:Root[] =[]
  backdata:string[]=[]
ngOnInit(): void {
 
  this._WishlistService.getwish().subscribe({
    next:(res)=>{
this.allpro=res.data
let newdata= res.data.map((res:any)=>res._id)
this.backdata=newdata
console.log(res);

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
addwish(id:any){
  this._WishlistService.addwish(id).subscribe({
next:(res)=>{
this._ToastrService.success(res.message)
this.backdata=res.data


console.log(res);

}
  })
}

remove(id:any):void{
this._WishlistService.removewish(id).subscribe({
  next:(res)=>{
    this._ToastrService.success(res.message)
   this.backdata=res.data
   let newremove = this.allpro.filter((item)=>this.backdata.includes(item._id))
   this.allpro=newremove

console.log( newremove);

  }
})
}
}
