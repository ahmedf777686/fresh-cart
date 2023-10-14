import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  token:any={
    token:localStorage.getItem('stoken')
  }
  constructor( private _HttpClient:HttpClient) { }

  sendpayment(id:string,dataform:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
    
    {
     shippingAddress:dataform
  },{
    headers:this.token
  }

    
    )
  }
  
}
