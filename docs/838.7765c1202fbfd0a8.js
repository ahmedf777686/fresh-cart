"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[838],{7838:(F,g,a)=>{a.r(g),a.d(g,{HomeComponent:()=>P});var r=a(6814),p=a(9090),m=a(756),u=a(1120),d=a(95),t=a(4769);let h=(()=>{class i{transform(e,o){return e.filter(n=>n.title.toLowerCase().includes(o.toLowerCase()))}static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275pipe=t.Yjl({name:"search",type:i,pure:!0,standalone:!0})}return i})();var _=a(146),f=a(5675),v=a(2425),x=a(9921);function C(i,s){1&i&&t._UZ(0,"img",13)}function Z(i,s){1&i&&t._UZ(0,"img",14)}function T(i,s){1&i&&t._UZ(0,"img",15)}function b(i,s){if(1&i&&(t._UZ(0,"img",16),t.TgZ(1,"h2"),t._uU(2),t.qZA()),2&i){const e=t.oxw().$implicit;t.Q6J("src",e.image,t.LSH),t.xp6(2),t.Oqu(e.name)}}function w(i,s){1&i&&(t.ynx(0),t.YNc(1,b,3,2,"ng-template",4),t.BQk())}function O(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"i",28),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,c=t.oxw();return t.KtG(c.remove(n._id))}),t.qZA()}}function A(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"i",29),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,c=t.oxw();return t.KtG(c.addwish(n._id))}),t.qZA()}}function H(i,s){if(1&i&&t._UZ(0,"i",30),2&i){const e=s.$implicit,o=t.oxw().$implicit;t.ekj("rating-color",o.ratingsAverage>=e)}}const y=function(i){return["/details",i]},S=function(){return[1,2,3,4,5]};function M(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",5)(1,"div",17),t.YNc(2,O,1,0,"i",18),t.YNc(3,A,1,0,"i",19),t._UZ(4,"img",20),t.TgZ(5,"h4",21),t._uU(6),t.ALo(7,"text"),t.qZA(),t.TgZ(8,"h4",22),t._uU(9),t.ALo(10,"text"),t.qZA(),t.TgZ(11,"div",23)(12,"span",24),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"div"),t.YNc(16,H,1,2,"i",25),t.TgZ(17,"span"),t._uU(18),t.qZA()()(),t.TgZ(19,"div")(20,"button",26,27),t.NdJ("click",function(){const c=t.CHM(e).$implicit,l=t.MAs(21),Y=t.oxw();return t.KtG(Y.addtocart(c._id,l))}),t._uU(22," +Add To cart"),t.qZA()()()()}if(2&i){const e=s.$implicit,o=t.oxw();t.xp6(2),t.Q6J("ngIf",o.backdata.includes(e._id)),t.xp6(1),t.Q6J("ngIf",!o.backdata.includes(e._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(17,y,e._id))("src",e.imageCover,t.LSH)("alt",e.title),t.xp6(2),t.Oqu(t.lcZ(7,10,e.category.name)),t.xp6(3),t.Oqu(t.lcZ(10,12,e.title)),t.xp6(4),t.Oqu(t.xi3(14,14,e.price,"EGP")),t.xp6(3),t.Q6J("ngForOf",t.DdM(19,S)),t.xp6(2),t.hij(" ",e.ratingsAverage,"")}}let P=(()=>{class i{constructor(e,o,n,c,l){this._ProductdataService=e,this._CartdataService=o,this._ToastrService=n,this._Renderer2=c,this._WishlistService=l,this.category="",this.allpro=[],this.search="",this.backdata=[],this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,autoplay:!0,navSpeed:700,navText:["",""],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:4}},nav:!0},this.slidercat={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],items:1,autoplay:!0}}ngOnInit(){console.log("hi"),this._WishlistService.getwish().subscribe({next:e=>{let o=e.data.map(n=>n._id);this.backdata=o,console.log(o)}}),this._ProductdataService.getallproducts().subscribe({next:e=>{this.allpro=e.data}}),this._ProductdataService.category().subscribe({next:e=>{this.category=e.data}})}addtocart(e,o){this._Renderer2.setAttribute(o,"disabled","true"),this._CartdataService.Addtocart(e).subscribe({next:n=>{this._CartdataService.countnav.next(n.numOfCartItems),this._ToastrService.success(n.message),this._Renderer2.removeAttribute(o,"disabled")}})}addwish(e){this._WishlistService.addwish(e).subscribe({next:o=>{this._ToastrService.success(o.message),this.backdata=o.data,console.log(o),this._ProductdataService.countwish.next(o.data.length)}})}remove(e){this._WishlistService.removewish(e).subscribe({next:o=>{this._ToastrService.success(o.message),this.backdata=o.data,this._ProductdataService.countwish.next(o.data.length),console.log(this.backdata)}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(_.P),t.Y36(f.C),t.Y36(v._W),t.Y36(t.Qsj),t.Y36(x.M))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:20,vars:12,consts:[[1,"py-2"],[1,"row","g-0"],[1,"col-md-9"],[3,"options"],["carouselSlide",""],[1,"col-md-3"],["height","200","src","./assets/images/slide-1.jpeg","alt","",1,"w-100"],["height","200","src","./assets/images/slide-2.jpeg","alt","",1,"w-100"],[4,"ngFor","ngForOf"],["type","search","placeholder","search...",1,"form-control","w-50","mx-auto","my-2",3,"ngModel","ngModelChange"],[1,"container-fluid","py-4"],[1,"row","g-4"],["class","col-md-3",4,"ngFor","ngForOf"],["height","400","src","./assets/images/main-slider-1.jpeg","alt","",1,"w-100"],["height","400","src","./assets/images/main-slider-2.jpeg","alt","",1,"w-100"],["height","400","src","./assets/images/main-slider-3.jpeg","alt","",1,"w-100"],["height","300",3,"src"],[1,"products","position-relative"],["role","button","class","fa fa-heart text-danger logo fa-2x ",3,"click",4,"ngIf"],["role","button","class","fa fa-heart fa-2x logo text-main",3,"click",4,"ngIf"],["role","button",1,"w-100",3,"routerLink","src","alt"],[1,"h6","text-main"],[1,"h6"],[1,"d-flex","justify-content-between"],[1,"small"],["class","fa fa-star ",3,"rating-color",4,"ngFor","ngForOf"],[1,"w-100","main-btn",3,"click"],["btn",""],["role","button",1,"fa","fa-heart","text-danger","logo","fa-2x",3,"click"],["role","button",1,"fa","fa-heart","fa-2x","logo","text-main",3,"click"],[1,"fa","fa-star"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"owl-carousel-o",3),t.YNc(4,C,1,0,"ng-template",4),t.YNc(5,Z,1,0,"ng-template",4),t.YNc(6,T,1,0,"ng-template",4),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"img",6)(9,"img",7),t.qZA()()(),t.TgZ(10,"section",0)(11,"owl-carousel-o",3),t.YNc(12,w,2,0,"ng-container",8),t.qZA()(),t.TgZ(13,"section")(14,"input",9),t.NdJ("ngModelChange",function(l){return n.search=l}),t.qZA(),t.TgZ(15,"div",10)(16,"div",11),t.YNc(17,M,23,20,"div",12),t.ALo(18,"slice"),t.ALo(19,"search"),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("options",n.slidercat),t.xp6(8),t.Q6J("options",n.customOptions),t.xp6(1),t.Q6J("ngForOf",n.category),t.xp6(2),t.Q6J("ngModel",n.search),t.xp6(3),t.Q6J("ngForOf",t.Dn7(18,5,t.xi3(19,9,n.allpro,n.search),0,20)))},dependencies:[r.ez,r.sg,r.O5,r.OU,r.H9,p.K,m.bB,m.Fy,m.Mp,u.rH,d.u5,d.Fj,d.JJ,d.On,h],styles:[".products[_ngcontent-%COMP%]{overflow:hidden}.products[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{position:absolute;top:10px;right:-40px;transition:all 1s}.products[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{transition:all 1s;opacity:0;transform:translateY(150%)}.products[_ngcontent-%COMP%]:hover   .main-btn[_ngcontent-%COMP%]{transform:translateY(0);opacity:1}.products[_ngcontent-%COMP%]:hover   .logo[_ngcontent-%COMP%]{top:10px;right:40px}"]})}return i})()}}]);