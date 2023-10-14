import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TextPipe } from 'src/app/pipes/text.pipe';
import { ProductdataService } from 'src/app/servise/productdata.service';


@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CommonModule,TextPipe],
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit{
constructor(private _ProductdataService:ProductdataService){}
data:any={}
ngOnInit(): void {
this._ProductdataService.getallproducts().subscribe((res)=>{
console.log(res.data);
this.data=res.data

})
}
}
