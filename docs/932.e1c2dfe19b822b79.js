"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[932],{6666:(I,p,r)=>{r.r(p),r.d(p,{LoginComponent:()=>C});var u=r(6814),o=r(95),_=r(1120),e=r(4769),m=r(9754);function d(n,s){1&n&&(e.TgZ(0,"p"),e._uU(1,"email is required"),e.qZA())}function f(n,s){1&n&&(e.TgZ(0,"p"),e._uU(1,"email is valid "),e.qZA())}function c(n,s){if(1&n&&(e.TgZ(0,"div",11),e.YNc(1,d,2,0,"p",12),e.YNc(2,f,2,0,"p",12),e.qZA()),2&n){const i=e.oxw();let l,t;e.xp6(1),e.Q6J("ngIf",null==(l=i.login.get("email"))?null:l.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=i.login.get("email"))?null:t.getError("email"))}}function h(n,s){1&n&&(e.TgZ(0,"p"),e._uU(1,"password is required"),e.qZA())}function v(n,s){1&n&&(e.TgZ(0,"p"),e._uU(1,"password is valid "),e.qZA())}function Z(n,s){if(1&n&&(e.TgZ(0,"div",11),e.YNc(1,h,2,0,"p",12),e.YNc(2,v,2,0,"p",12),e.qZA()),2&n){const i=e.oxw();let l,t;e.xp6(1),e.Q6J("ngIf",null==(l=i.login.get("password"))?null:l.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=i.login.get("password"))?null:t.getError("pattern"))}}function T(n,s){if(1&n&&(e.TgZ(0,"p",11),e._uU(1),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.Oqu(i.errmes)}}function A(n,s){1&n&&e._UZ(0,"i",13)}let C=(()=>{class n{constructor(i,l,t){this._FormBuilder=i,this._Authdata1Service=l,this._Router=t,this.isloading=!1,this.login=this._FormBuilder.group({email:["",[o.kI.required,o.kI.email]],password:["",[o.kI.required,o.kI.pattern(/^\w{6,}$/)]]})}handelform(){this.isloading=!0,1==this.login.valid&&this._Authdata1Service.login(this.login.value).subscribe({next:i=>{"success"==i.message&&(this.isloading=!1,localStorage.setItem("stoken",i.token),this._Router.navigate(["./home"]))},error:i=>{this.errmes=i.error.message,this.isloading=!1}})}static#e=this.\u0275fac=function(l){return new(l||n)(e.Y36(o.qu),e.Y36(m.$),e.Y36(_.F0))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:21,vars:6,consts:[[1,""],[1,"p-3",3,"formGroup","submit"],["for","email",1,"py-2"],["formControlName","email","type","email","id","email",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","password",1,"py-2"],["formControlName","password","type","password","id","password",1,"form-control"],["role","button",1,"d-flex","justify-content-between","align-items-center"],[1,"main-btn","mt-2",3,"disabled"],["class","fa fa-spin fa-spinner",4,"ngIf"],["routerLink","/forgotpassword",1,"text-main","fw-bolder"],[1,"alert","alert-danger"],[4,"ngIf"],[1,"fa","fa-spin","fa-spinner"]],template:function(l,t){if(1&l&&(e.TgZ(0,"section",0)(1,"h2"),e._uU(2,"Register Now"),e.qZA(),e.TgZ(3,"form",1),e.NdJ("submit",function(){return t.handelform()}),e.TgZ(4,"div")(5,"label",2),e._uU(6,"email"),e.qZA(),e._UZ(7,"input",3),e.YNc(8,c,3,2,"div",4),e.qZA(),e.TgZ(9,"div")(10,"label",5),e._uU(11,"password"),e.qZA(),e._UZ(12,"input",6),e.YNc(13,Z,3,2,"div",4),e.qZA(),e.YNc(14,T,2,1,"p",4),e.TgZ(15,"div",7)(16,"button",8),e._uU(17," login"),e.YNc(18,A,1,0,"i",9),e.qZA(),e.TgZ(19,"p",10),e._uU(20,"forgotPassword"),e.qZA()()()()),2&l){let a,g;e.xp6(3),e.Q6J("formGroup",t.login),e.xp6(5),e.Q6J("ngIf",(null==(a=t.login.get("email"))?null:a.errors)&&((null==(a=t.login.get("email"))?null:a.touched)||(null==(a=t.login.get("email"))?null:a.value.length)>0)),e.xp6(5),e.Q6J("ngIf",(null==(g=t.login.get("password"))?null:g.errors)&&((null==(g=t.login.get("password"))?null:g.touched)||(null==(g=t.login.get("password"))?null:g.value.length)>0)),e.xp6(1),e.Q6J("ngIf",t.errmes),e.xp6(2),e.Q6J("disabled",t.login.invalid),e.xp6(2),e.Q6J("ngIf",t.isloading)}},dependencies:[u.ez,u.O5,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,_.rH]})}return n})()}}]);