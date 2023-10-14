import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Authdata1Service } from 'src/app/servise/authdata1.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _FormBuilder:FormBuilder,private _Authdata1Service:Authdata1Service,private _Router:Router){}
  errmes:any
  isloading:boolean=false
  login:FormGroup=this._FormBuilder.group({

    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required, Validators.pattern(/^\w{6,}$/)]],
   
  } )
  
  

  
  handelform(){
    this.isloading=true
   
  
    if(this.login.valid== true){
      this._Authdata1Service.login(this.login.value).subscribe({
        next:(res)=>{
          if(res.message=="success"){
            this.isloading=false
            localStorage.setItem('stoken',res.token)
  this._Router.navigate(['./home'])
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
