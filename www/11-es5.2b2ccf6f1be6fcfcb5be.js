!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1s7i":function(t,o,c){"use strict";c.r(o),c.d(o,"ContactsModule",(function(){return K}));var i,a=c("ofXK"),r=c("tyNb"),u=c("fXoL"),s=c("TEn/"),l=((i=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=u.Bb({type:i,selectors:[["app-navbar"]],decls:8,vars:0,consts:[["ion-button","","icon-only","","menuToggle",""],["name","menu"]],template:function(n,t){1&n&&(u.Kb(0,"ion-header"),u.Kb(1,"ion-toolbar"),u.Kb(2,"button",0),u.Ib(3,"ion-icon",1),u.Jb(),u.Kb(4,"ion-title"),u.dc(5,"Title"),u.Jb(),u.Kb(6,"ion-buttons"),u.dc(7," Logout "),u.Jb(),u.Jb(),u.Jb())},directives:[s.e,s.r,s.f,s.q,s.c],styles:[""]}),i);function b(n,t){if(1&n){var e=u.Lb();u.Kb(0,"ion-button",4),u.Sb("click",(function(){u.Zb(e);var n=u.Ub().$implicit;return u.Ub().addContact(n)})),u.Ib(1,"ion-icon",5),u.Jb()}}function d(n,t){if(1&n){var e=u.Lb();u.Kb(0,"ion-list"),u.Kb(1,"ion-item"),u.Kb(2,"ion-label"),u.dc(3),u.Jb(),u.cc(4,b,2,0,"ion-button",1),u.Kb(5,"ion-button",2),u.Sb("click",(function(){u.Zb(e);var n=t.$implicit;return u.Ub().deleteContact(n)})),u.Ib(6,"ion-icon",3),u.Jb(),u.Jb(),u.Jb()}if(2&n){var o=t.$implicit;u.xb(3),u.ec(o.name),u.xb(1),u.Xb("ngIf",!1===o.addedToContact)}}var f,p,m,h,y,v,C=((m=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){this.title="My Contacts",this.contacts=[{name:"Cyril",addedToContact:!1},{name:"Gr\xe9gory",addedToContact:!1},{name:"Etienne",addedToContact:!1},{name:"Monia",addedToContact:!1},{name:"Charif",addedToContact:!1},{name:"S\xe9bastien",addedToContact:!1},{name:"Philippe",addedToContact:!1},{name:"Bruno",addedToContact:!1},{name:"Cl\xe9ment",addedToContact:!1}]}},{key:"deleteContact",value:function(n){this.contacts.splice(this.contacts.indexOf(n),1)}},{key:"addContact",value:function(n){n.addedToContact=!0}}]),t}()).\u0275fac=function(n){return new(n||m)},m.\u0275cmp=u.Bb({type:m,selectors:[["app-contact-dashboard"]],decls:5,vars:2,consts:[[4,"ngFor","ngForOf"],["fill","clear",3,"click",4,"ngIf"],["fill","claer",3,"click"],["name","close-circle-outline"],["fill","clear",3,"click"],["name","checkbox-outline"]],template:function(n,t){1&n&&(u.Ib(0,"app-navbar"),u.Kb(1,"ion-content"),u.Kb(2,"ion-title"),u.dc(3),u.Jb(),u.cc(4,d,7,2,"ion-list",0),u.Jb()),2&n&&(u.xb(3),u.fc(" ",t.title,"\n"),u.xb(1),u.Xb("ngForOf",t.contacts))},directives:[l,s.d,s.q,a.h,s.j,s.h,s.i,a.i,s.b,s.f],styles:[""]}),m),k=((p=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(n){return new(n||p)},p.\u0275cmp=u.Bb({type:p,selectors:[["app-contact-discussion"]],decls:2,vars:0,template:function(n,t){1&n&&(u.Kb(0,"p"),u.dc(1," contact-discussion works!\n"),u.Jb())},styles:[""]}),p),w=((f=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(n){return new(n||f)},f.\u0275cmp=u.Bb({type:f,selectors:[["app-contact-search"]],decls:2,vars:0,template:function(n,t){1&n&&(u.Kb(0,"p"),u.dc(1," contact-search works!\n"),u.Jb())},styles:[""]}),f),g=[{path:"",component:(h=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}(),h.\u0275fac=function(n){return new(n||h)},h.\u0275cmp=u.Bb({type:h,selectors:[["app-contacts"]],decls:1,vars:0,template:function(n,t){1&n&&u.Ib(0,"ion-router-outlet")},directives:[s.l],styles:[""]}),h),children:[{path:"search",component:w},{path:"discussion/:id",component:k},{path:"dashboard",component:C},{path:"groups",loadChildren:function(){return c.e(12).then(c.bind(null,"cTxv")).then((function(n){return n.GroupsModule}))}},{path:"**",redirectTo:"dashboard"}]}],T=((y=function t(){n(this,t)}).\u0275mod=u.Fb({type:y}),y.\u0275inj=u.Eb({factory:function(n){return new(n||y)},imports:[[r.i.forChild(g)],r.i]}),y),J=c("PCNd"),K=((v=function t(){n(this,t)}).\u0275mod=u.Fb({type:v}),v.\u0275inj=u.Eb({factory:function(n){return new(n||v)},imports:[[a.b,T,J.a]]}),v)}}])}();