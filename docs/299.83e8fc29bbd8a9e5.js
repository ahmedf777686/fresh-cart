"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[299],{5299:(p,d,s)=>{s.r(d),s.d(d,{BrandsComponent:()=>r});var c=s(6814),t=s(4769),l=s(146);function m(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",16),t.NdJ("click",function(){const u=t.CHM(e).$implicit,_=t.oxw();return t.KtG(_.getdetails(u._id))}),t.TgZ(1,"div",17),t._UZ(2,"img",18),t.TgZ(3,"h2",19),t._uU(4),t.qZA()()()}if(2&o){const e=a.$implicit;t.xp6(2),t.Q6J("src",e.image,t.LSH),t.xp6(2),t.Oqu(e.name)}}let r=(()=>{class o{constructor(e){this._ProductdataService=e,this.brands="",this.x=""}ngOnInit(){this._ProductdataService.brands().subscribe({next:e=>{this.brands=e.data,console.log(e.data)}})}getdetails(e){this._ProductdataService.brandsdetails(e).subscribe({next:n=>{this.x=n.data,console.log(this.x)}})}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(l.P))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-brands"]],standalone:!0,features:[t.jDz],decls:23,vars:4,consts:[[1,"text-center","color","py-4"],[1,"container","py-5"],[1,"row","g-3"],["role","button","class","btn btn-primary","data-bs-toggle","modal","data-bs-target","#exampleModal","class","col-md-3 border p-4 ",3,"click",4,"ngFor","ngForOf"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"d-flex","justify-content-between","align-items-center","px-4"],[1,"color"],[1,"h6"],["height","150","alt","",3,"src"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["role","button","data-bs-toggle","modal","data-bs-target","#exampleModal",1,"col-md-3","border","p-4",3,"click"],[1,""],["alt","",1,"w-100",3,"src"],[1,"text-center"]],template:function(n,i){1&n&&(t.TgZ(0,"h2",0),t._uU(1,"All Brands"),t.qZA(),t.TgZ(2,"section",1)(3,"div",2),t.YNc(4,m,5,2,"div",3),t.qZA()(),t.TgZ(5,"section")(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",7),t._UZ(10,"h1",8)(11,"button",9),t.qZA(),t.TgZ(12,"div",10)(13,"div")(14,"h2",11),t._uU(15),t.qZA(),t.TgZ(16,"h2",12),t._uU(17),t.qZA()(),t.TgZ(18,"div"),t._UZ(19,"img",13),t.qZA()(),t.TgZ(20,"div",14)(21,"button",15),t._uU(22,"Close"),t.qZA()()()()()()),2&n&&(t.xp6(4),t.Q6J("ngForOf",i.brands),t.xp6(11),t.Oqu(i.x.name),t.xp6(2),t.Oqu(i.x.slug),t.xp6(2),t.Q6J("src",i.x.image,t.LSH))},dependencies:[c.ez,c.sg]})}return o})()},146:(p,d,s)=>{s.d(d,{P:()=>m});var c=s(5619),t=s(4769),l=s(9862);let m=(()=>{class r{constructor(a){this._HttpClient=a,this.countwish=new c.X(0)}getallproducts(a=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${a}`)}category(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}categorydetails(a){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${a}`)}details(a){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${a}`)}detailsdata(a){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${a}`)}brands(){return this._HttpClient.get("https://route-ecommerce.onrender.com/api/v1/brands")}brandsdetails(a){return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands/${a}`)}static#t=this.\u0275fac=function(e){return new(e||r)(t.LFG(l.eN))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);