"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[691],{9691:(D,d,i)=>{i.r(d),i.d(d,{DetailsComponent:()=>h});var o=i(6814),r=i(756),t=i(4769),l=i(1120),u=i(146),p=i(5675),m=i(2425);function g(e,_){if(1&e&&t._UZ(0,"img",15),2&e){const a=t.oxw().$implicit;t.Q6J("src",a,t.LSH)}}function v(e,_){1&e&&(t.ynx(0),t.YNc(1,g,1,1,"ng-template",14),t.BQk())}function f(e,_){if(1&e){const a=t.EpF();t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"owl-carousel-o",4),t.YNc(4,v,2,0,"ng-container",5),t.qZA()(),t.TgZ(5,"div",6)(6,"div")(7,"h2",7),t._uU(8),t.qZA(),t.TgZ(9,"h2",8),t._uU(10),t.qZA()(),t.TgZ(11,"div",9)(12,"span"),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"span",10),t._UZ(16,"i",11),t._uU(17),t.qZA()(),t.TgZ(18,"button",12,13),t.NdJ("click",function(){t.CHM(a);const n=t.MAs(19),c=t.oxw();return t.KtG(c.addtocart(c.datailsdata._id,n))}),t._uU(20," +Add To cart"),t.qZA()()()()}if(2&e){const a=t.oxw();t.xp6(3),t.Q6J("options",a.customOptions),t.xp6(1),t.Q6J("ngForOf",a.datailsdata.images),t.xp6(4),t.Oqu(a.datailsdata.description),t.xp6(2),t.Oqu(a.datailsdata.title),t.xp6(3),t.Oqu(t.xi3(14,6,a.datailsdata.price,"EGP")),t.xp6(4),t.hij(" ",a.datailsdata.ratingsAverage,"")}}let h=(()=>{class e{constructor(a,s,n,c,x){this._ActivatedRoute=a,this._ProductdataService=s,this._Renderer2=n,this._CartdataService=c,this._ToastrService=x,this.detailsId="",this.datailsdata="",this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,items:1,autoplay:!0,navSpeed:700,navText:["",""],nav:!0}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:a=>{console.log(a.get("id")),this.detailsId=a.get("id")}}),this._ProductdataService.detailsdata(this.detailsId).subscribe({next:a=>{this.datailsdata=a.data,console.log(a.data)}})}addtocart(a,s){this._Renderer2.setAttribute(s,"disabled","true"),this._CartdataService.Addtocart(a).subscribe({next:n=>{this._CartdataService.countnav.next(n.numOfCartItems),this._ToastrService.success(n.message),this._Renderer2.removeAttribute(s,"disabled")}})}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(l.gz),t.Y36(u.P),t.Y36(t.Qsj),t.Y36(p.C),t.Y36(m._W))};static#a=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-details"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 mx-auto py-5",4,"ngIf"],[1,"w-75","mx-auto","py-5"],[1,"row","d-flex","align-items-center","justify-content-center"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"small"],[1,"text-main","small"],[1,"d-flex","justify-content-between","py-3"],[1,"rating-color"],[1,"fa","fa-star"],[1,"w-100","main-btn",3,"click"],["btn",""],["carouselSlide",""],[1,"w-100",3,"src"]],template:function(s,n){1&s&&t.YNc(0,f,21,9,"section",0),2&s&&t.Q6J("ngIf",n.datailsdata)},dependencies:[o.ez,o.sg,o.O5,o.H9,r.bB,r.Fy,r.Mp]})}return e})()}}]);