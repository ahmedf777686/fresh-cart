"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[592],{7913:(c,a,r)=>{r.d(a,{c:()=>n});var s=r(6814),t=r(4769);let n=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-footer"]],standalone:!0,features:[t.jDz],decls:15,vars:0,consts:[[1,"bg-main-light","py-5"],[1,"container"],[1,"text-muted"],[1,"row","g-3"],[1,"col-md-10"],["type","text","placeholder","Email....",1,"w-100","form-control"],[1,"col-md-2"],[1,"main-btn","w-100"],[1,"text-center"]],template:function(i,_){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h3"),t._uU(3,"Get The fershcart app"),t.qZA(),t.TgZ(4,"h6",2),t._uU(5," we will send you a link open it your phone to download the app ."),t.qZA(),t.TgZ(6,"div",3)(7,"div",4),t._UZ(8,"input",5),t.qZA(),t.TgZ(9,"div",6)(10,"button",7),t._uU(11,"Share App Link"),t.qZA()()(),t._UZ(12,"hr"),t.TgZ(13,"p",8),t._uU(14,"Copy Right 2023 \xa9 Ahmed farouk All Rights Reserved"),t.qZA()()())},dependencies:[s.ez],styles:["[_nghost-%COMP%]{margin-top:auto}"]})}return o})()},9090:(c,a,r)=>{r.d(a,{K:()=>t});var s=r(4769);let t=(()=>{class n{transform(u){return u.split(" ").slice(0,1).join(" ")}static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275pipe=s.Yjl({name:"text",type:n,pure:!0,standalone:!0})}return n})()},9754:(c,a,r)=>{r.d(a,{$:()=>n});var s=r(4769),t=r(9862);let n=(()=>{class o{constructor(e){this._HttpClient=e}registerdform(e){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",e)}login(e){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",e)}static#t=this.\u0275fac=function(i){return new(i||o)(s.LFG(t.eN))};static#e=this.\u0275prov=s.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},9921:(c,a,r)=>{r.d(a,{M:()=>n});var s=r(4769),t=r(9862);let n=(()=>{class o{constructor(e){this._HttpClient=e,this.token={token:localStorage.getItem("stoken")}}addwish(e){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/wishlist",{productId:e},{headers:this.token})}getwish(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/wishlist",{headers:this.token})}removewish(e){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${e}`,{headers:this.token})}static#t=this.\u0275fac=function(i){return new(i||o)(s.LFG(t.eN))};static#e=this.\u0275prov=s.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()}}]);