import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdataService } from 'src/app/servise/productdata.service';

@Component({
  selector: 'app-catdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catdetails.component.html',
  styleUrls: ['./catdetails.component.scss']
})
export class CatdetailsComponent implements OnInit{
  id:any
  datacat:any
constructor(private _ActivatedRoute:ActivatedRoute,private _ProductdataService:ProductdataService){}
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(res)=>{
this.id=res.get('id')

console.log(this.id);

    }
  })
this._ProductdataService.categorydetails(this.id).subscribe({
  next:(res)=>{
    this.datacat=res.data
console.log(res);


  }
})
}

}
