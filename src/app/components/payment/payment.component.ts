import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/servise/payment.service';

FormGroup
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  id:any
constructor(private _ActivatedRoute:ActivatedRoute,private _PaymentService:PaymentService){}
payment:FormGroup= new FormGroup({

  details: new  FormControl(''),
  phone: new  FormControl(''),
  city: new  FormControl(''),
})

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(res)=>{
 this.id=res.get('id')

    }
  })
}

paymentsend(){
this._PaymentService.sendpayment(this.id,this.payment.value).subscribe({

  next:(res)=>{
if(res.status=='success'){
  window.open(res.session.url,'_blank')
  
}
console.log(res);

  }
})

}
}
