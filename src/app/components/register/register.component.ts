import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Authdata1Service } from 'src/app/servise/authdata1.service';


type NewType = FormControlOptions;

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
constructor(private _FormBuilder:FormBuilder,private _Authdata1Service:Authdata1Service,private _Router:Router){}
errmes:any
isloading:boolean=false
registerform:FormGroup=this._FormBuilder.group({


  name:['',[Validators.required,Validators.maxLength(10),Validators.minLength(3)]],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required, Validators.pattern(/^\w{6,}$/)]],
  rePassword:['',[]],
  phone:['',[Validators.pattern(/^01[0125][0-9]{8}$/),Validators.required]],
},{validators:[this.confirmpassword]} ) 



confirmpassword(group:FormGroup):void{

const password =group.get('password')
const rePassword =group.get('rePassword')

if(rePassword?.value == ''){
  rePassword?.setErrors({required:true})
}else if(password?.value != rePassword?.value)
rePassword?.setErrors({mismatch:true})
}

handelform(){
  this.isloading=true


  if(this.registerform.valid== true){
    this._Authdata1Service.registerdform(this.registerform.value).subscribe({
      next:(res)=>{
        if(res.message=="success"){
          this.isloading=false
this._Router.navigate(['./login'])
        }
  
    
      },
      error:(err)=>{
        this.errmes=err.error.message
        this.isloading=false
  
    
      },
    })
  }
  

}

}
