"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[45],{4045:(v,p,a)=>{a.r(p),a.d(p,{BlankLayoutComponent:()=>_});var d=a(6814),s=a(1120),t=a(4769),m=a(9921),i=a(5675),g=a(146);const e=["navbar"],u=["icon"];let h=(()=>{class c{constructor(n,r,o,l,C){this._WishlistService=n,this._Router=r,this._CartdataService=o,this._Renderer2=l,this._ProductdataService=C,this.c=0,this.count=0}scroll(){scrollY>500?(this._Renderer2.addClass(this.navel.nativeElement,"px-5"),this._Renderer2.addClass(this.logo.nativeElement,"text-danger")):(this._Renderer2.removeClass(this.navel.nativeElement,"px-5"),this._Renderer2.removeClass(this.logo.nativeElement,"text-danger"))}ngOnInit(){this._WishlistService.getwish().subscribe({next:n=>{this.c=n.count,console.log(n)}}),this._ProductdataService.countwish.subscribe({next:n=>{this.c=n,console.log(this.c)}}),this._CartdataService.countnav.subscribe({next:n=>{this.count=n}}),this._CartdataService.getdata().subscribe({next:n=>{this._CartdataService.countnav.next(n.numOfCartItems)}})}SignOut(){localStorage.removeItem("stoken"),this._Router.navigate(["./login"])}static#t=this.\u0275fac=function(r){return new(r||c)(t.Y36(m.M),t.Y36(s.F0),t.Y36(i.C),t.Y36(t.Qsj),t.Y36(g.P))};static#e=this.\u0275cmp=t.Xpm({type:c,selectors:[["app-nav-blank"]],viewQuery:function(r,o){if(1&r&&(t.Gf(e,5),t.Gf(u,5)),2&r){let l;t.iGM(l=t.CRH())&&(o.navel=l.first),t.iGM(l=t.CRH())&&(o.logo=l.first)}},hostBindings:function(r,o){1&r&&t.NdJ("scroll",function(){return o.scroll()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:57,vars:2,consts:[[1,"navbar","navbar-expand-sm","navbar-light","bg-light","fixed-top"],["navbar",""],[1,"container-fluid"],["routerLink","",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt",""],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],[1,"navbar-toggler-icon"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mt-2","mt-lg-0"],[1,"nav-item"],["routerLinkActive","btn-activ","routerLink","/home","aria-current","page",1,"nav-link"],[1,"visually-hidden"],["routerLinkActive","btn-activ","routerLink","/products","aria-current","page",1,"nav-link"],["routerLinkActive","btn-activ","routerLink","/brands","aria-current","page",1,"nav-link"],["routerLinkActive","btn-activ","routerLink","/categories","aria-current","page",1,"nav-link"],[1,"navbar-nav","ms-auto","mt-2","mt-lg-0","d-flex","align-items-center"],["role","button","routerLink","/forgotpassword",1,"fa","fa-gear","fa-spin","text-main","fa-2x"],[1,"nav-item","position-relative","text-dark"],["routerLink","/wishlist","aria-current","page",1,"nav-link"],[1,"fa","fa-heart","fa-2x","text-main"],[1,"badge","position-absolute","top-0","end-0","bg-info"],["icon",""],["routerLink","/Cart","aria-current","page",1,"nav-link"],[1,"fa","fa-shopping-basket","fa-2x","text-main"],[1,"nav-item","d-flex","align-items-center","justify-content-center","gap-3","me-2"],[1,"fa","fa-facebook"],[1,"fa","fa-instagram"],[1,"fa","fa-twitter"],[1,"fa","fa-linkedin"],[1,"fa","fa-youtube"],["role","button",3,"click"]],template:function(r,o){1&r&&(t.TgZ(0,"section")(1,"nav",0,1)(3,"div",2)(4,"a",3),t._UZ(5,"img",4),t.qZA(),t.TgZ(6,"button",5),t._UZ(7,"span",6),t.qZA(),t.TgZ(8,"div",7)(9,"ul",8)(10,"li",9)(11,"a",10),t._uU(12,"Home "),t.TgZ(13,"span",11),t._uU(14,"(current)"),t.qZA()()(),t.TgZ(15,"li",9)(16,"a",12),t._uU(17,"products "),t.TgZ(18,"span",11),t._uU(19,"(current)"),t.qZA()()(),t.TgZ(20,"li",9)(21,"a",13),t._uU(22,"brands "),t.TgZ(23,"span",11),t._uU(24,"(current)"),t.qZA()()(),t.TgZ(25,"li",9)(26,"a",14),t._uU(27,"categories "),t.TgZ(28,"span",11),t._uU(29,"(current)"),t.qZA()()()(),t.TgZ(30,"ul",15),t._UZ(31,"i",16),t.TgZ(32,"li",17)(33,"a",18),t._UZ(34,"i",19),t.TgZ(35,"span",11),t._uU(36,"(current)"),t.qZA()(),t.TgZ(37,"span",20,21),t._uU(39),t.qZA()(),t.TgZ(40,"li",17)(41,"a",22),t._UZ(42,"i",23),t.TgZ(43,"span",11),t._uU(44,"(current)"),t.qZA()(),t.TgZ(45,"span",20,21),t._uU(47),t.qZA()(),t.TgZ(48,"li",24),t._UZ(49,"i",25)(50,"i",26)(51,"i",27)(52,"i",28)(53,"i",29),t.qZA(),t.TgZ(54,"li",9)(55,"span",30),t.NdJ("click",function(){return o.SignOut()}),t._uU(56,"SignOut"),t.qZA()()()()()()()),2&r&&(t.xp6(39),t.Oqu(o.c),t.xp6(8),t.Oqu(o.count))},dependencies:[d.ez,s.rH,s.Od],styles:["nav[_ngcontent-%COMP%]{transition:all 1s}.he[_ngcontent-%COMP%]{color:green}"]})}return c})();var f=a(7913);let _=(()=>{class c{gotoup(){scrollTo(0,0)}static#t=this.\u0275fac=function(r){return new(r||c)};static#e=this.\u0275cmp=t.Xpm({type:c,selectors:[["app-blank-layout"]],standalone:!0,features:[t.jDz],decls:6,vars:0,consts:[[1,"container","main-fixed"],[1,"gotoup",3,"click"],[1,"fa","fa-arrow-up"]],template:function(r,o){1&r&&(t._UZ(0,"app-nav-blank"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t._UZ(3,"app-footer"),t.TgZ(4,"button",1),t.NdJ("click",function(){return o.gotoup()}),t._UZ(5,"i",2),t.qZA())},dependencies:[d.ez,h,s.lC,f.c],styles:["[_nghost-%COMP%]{min-height:100vh;display:flex;flex-direction:column}.main-fixed[_ngcontent-%COMP%]{padding-top:70px}"]})}return c})()},5675:(v,p,a)=>{a.d(p,{C:()=>m});var d=a(5619),s=a(4769),t=a(9862);let m=(()=>{class i{constructor(e){this._HttpClient=e,this.token={token:localStorage.getItem("stoken")},this.countnav=new d.X(0)}Addtocart(e){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:e},{headers:this.token})}getdata(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart",{headers:this.token})}removecart(e){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${e}`,{headers:this.token})}clearcart(){return this._HttpClient.delete("https://ecommerce.routemisr.com/api/v1/cart",{headers:this.token})}updatacart(e,u){return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${e}`,{count:u},{headers:this.token})}static#t=this.\u0275fac=function(u){return new(u||i)(s.LFG(t.eN))};static#e=this.\u0275prov=s.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},146:(v,p,a)=>{a.d(p,{P:()=>m});var d=a(5619),s=a(4769),t=a(9862);let m=(()=>{class i{constructor(e){this._HttpClient=e,this.countwish=new d.X(0)}getallproducts(e=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${e}`)}category(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}categorydetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${e}`)}details(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${e}`)}detailsdata(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${e}`)}brands(){return this._HttpClient.get("https://route-ecommerce.onrender.com/api/v1/brands")}brandsdetails(e){return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands/${e}`)}static#t=this.\u0275fac=function(u){return new(u||i)(s.LFG(t.eN))};static#e=this.\u0275prov=s.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()}}]);