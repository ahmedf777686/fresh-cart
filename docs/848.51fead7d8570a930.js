"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[848],{848:(l,a,r)=>{r.r(a),r.d(a,{AllordersComponent:()=>m});var c=r(6814),n=r(9090),t=r(4769),p=r(146);function o(e,d){if(1&e&&(t.TgZ(0,"div",2)(1,"div"),t._UZ(2,"img",3),t.qZA(),t.TgZ(3,"div")(4,"h6",4),t._uU(5),t.ALo(6,"text"),t.qZA(),t.TgZ(7,"h6",4),t._uU(8),t.qZA()()()),2&e){const s=d.$implicit;t.xp6(2),t.Q6J("src",s.imageCover,t.LSH),t.xp6(3),t.Oqu(t.lcZ(6,3,s.category.name)),t.xp6(3),t.Oqu(s.price)}}let m=(()=>{class e{constructor(s){this._ProductdataService=s,this.data={}}ngOnInit(){this._ProductdataService.getallproducts().subscribe(s=>{console.log(s.data),this.data=s.data})}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(p.P))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-allorders"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"row","g-3"],["class","col-md-2",4,"ngFor","ngForOf"],[1,"col-md-2"],["alt","",1,"w-100",3,"src"],[1,"text-main"]],template:function(i,_){1&i&&(t.TgZ(0,"section")(1,"div",0),t.YNc(2,o,9,5,"div",1),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("ngForOf",_.data))},dependencies:[c.ez,c.sg,n.K]})}return e})()},146:(l,a,r)=>{r.d(a,{P:()=>p});var c=r(5619),n=r(4769),t=r(9862);let p=(()=>{class o{constructor(e){this._HttpClient=e,this.countwish=new c.X(0)}getallproducts(e=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${e}`)}category(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}categorydetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${e}`)}details(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${e}`)}detailsdata(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${e}`)}brands(){return this._HttpClient.get("https://route-ecommerce.onrender.com/api/v1/brands")}brandsdetails(e){return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands/${e}`)}static#t=this.\u0275fac=function(d){return new(d||o)(n.LFG(t.eN))};static#e=this.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()}}]);