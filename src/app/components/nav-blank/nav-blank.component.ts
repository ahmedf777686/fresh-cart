import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartdataService } from 'src/app/servise/cartdata.service';
import { ProductdataService } from 'src/app/servise/productdata.service';
import { WishlistService } from 'src/app/servise/wishlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit{





constructor(private _WishlistService:WishlistService,private _Router:Router, private _CartdataService:CartdataService,private _Renderer2:Renderer2,private _ProductdataService:ProductdataService){}
c:number=0
@ViewChild('navbar') navel!:ElementRef
@ViewChild('icon') logo!:ElementRef
@HostListener('window:scroll')
scroll():void{
if(scrollY>500){
  this._Renderer2.addClass(this.navel.nativeElement,'px-5')
  this._Renderer2.addClass(this.logo.nativeElement,'text-danger' )
}else{
  this._Renderer2.removeClass(this.navel.nativeElement,'px-5')

  this._Renderer2.removeClass(this.logo.nativeElement,'text-danger' )
}
  
}
  count:any=0
ngOnInit(): void {
  this._WishlistService.getwish().subscribe({
    next:(res)=>{
      this.c=res.count
console.log(res);

    }
  })
  this._ProductdataService.countwish.subscribe({
    next:(res)=>{
this.c=res
console.log(this.c);

    }
  })
  this._CartdataService.countnav.subscribe({
    next:(res)=>{
   this.count=  res


    }
  })

  this._CartdataService.getdata().subscribe({
    next:(res)=>{ 
    this._CartdataService.countnav.next(res.numOfCartItems)


    }
  })
}
  SignOut():void{
localStorage.removeItem('stoken')
this._Router.navigate(['./login'])
  }


}

