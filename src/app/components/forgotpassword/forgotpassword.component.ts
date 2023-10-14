import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordService } from 'src/app/servise/forgotpassword.service';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
num1:boolean=true
num2:boolean=false
num3:boolean=false
userMas:any
constructor(private _ForgotpasswordService:ForgotpasswordService, private _Router:Router){}

frogot:FormGroup= new FormGroup({
  email:new FormControl('')
})

reset:FormGroup= new FormGroup({
  resetCode:new FormControl('')
})
ResetPassword:FormGroup= new FormGroup({
  email:new FormControl(''),
  newPassword:new FormControl(''),
})

Forgotpassword(dataform:object){
this._ForgotpasswordService.ForgotPassword(dataform).subscribe({
  next:(res)=>{
    if(res.statusMsg =='success'){
      this.num1=false
      this.num2=true
      this.userMas=res.message
      console.log(res);
    }



  },
  error:(err)=>{
    this.userMas=err.error.message

console.log(err);

  },
})

}
resetpass(code:any){
this._ForgotpasswordService.Reset(code).subscribe({
  next:(res)=>{
    if(res.status =='Success'){
      this.num2=false
      this.num3=true
    }
console.log(res);

  },
  error:(err)=>{
    this.userMas=err.message
    console.log(err);
  },
})

}
newpassword(newpas:any){
this._ForgotpasswordService.newpassword(newpas).subscribe({
  next:(res)=>{
    localStorage.setItem(res.token,'stoken')
this._Router.navigate([`/home`])
console.log(res);

  },
  error:(err)=>{
console.log(err);

  }
})

}
}
