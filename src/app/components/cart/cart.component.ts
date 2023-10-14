import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartdataService } from 'src/app/servise/cartdata.service';
import { ToastrService } from 'ngx-toastr';
import { TextPipe } from 'src/app/pipes/text.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,TextPipe,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
constructor(private _CartdataService:CartdataService,private _ToastrService:ToastrService){}
cartdata:any=''
ngOnInit(): void {
 
  this._CartdataService.getdata().subscribe({
    next:(res)=>{
this.cartdata=res.data


    }
  })
}


removecart(id:any){
this._CartdataService.removecart(id).subscribe({
  next:(res)=>{
    this.cartdata=res.data
this._ToastrService.error(res.status)
this._CartdataService.countnav.next(res.numOfCartItems)
console.log(res);

  }
})
  
}


updatacart(id:any,count:any){

this._CartdataService.updatacart(id,count).subscribe({
  next:(res)=>{
if(count >=1){
  this.cartdata=res.data
  this._ToastrService.success(res.status)
  console.log(res);
}else{
  this._ToastrService.info('The product cannot be less than zero. Try again')
}


  }
})


}

clearcart(){
  this._CartdataService.clearcart().subscribe({
    next:(res)=>{
      this.cartdata=null
      this._ToastrService.success(res.message)
      this._CartdataService.countnav.next(0)


    }
  })
}
}