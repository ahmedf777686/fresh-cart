import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdataService } from 'src/app/servise/productdata.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
category:any
  constructor(private _ProductdataService:ProductdataService  ){}
ngOnInit(): void {
  this._ProductdataService.category().subscribe({
    next:(res)=>{
      this.category=res.data
console.log(res.data);

    }
  })
}

}


