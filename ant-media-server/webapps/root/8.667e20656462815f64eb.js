(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{W7GC:function(e,t){},iNK9:function(e,t,a){"use strict";a.r(t),a.d(t,"ClusterRoutes",(function(){return ue})),a.d(t,"ClusterModule",(function(){return fe}));var n,o,c=a("tyNb"),i=a("ofXK"),s=a("3Pt+"),l=a("tk/3"),r=a("BWpK"),b=a("XGgE"),d=a("Dh3D"),u=a("+0xr"),f=(a("EUDy"),a("W7GC"),a("OLhb")),p=a("fXoL"),m=a("0IaG"),g=a("M9IT"),h=a("mrSG");function S(e,t){1&e&&(p.Sb(0,"mat-header-cell"),p.Jc(1," Node IP "),p.Rb())}function C(e,t){if(1&e&&(p.Sb(0,"mat-cell"),p.Jc(1),p.Rb()),2&e){var a=t.$implicit;p.Bb(1),p.Lc(" ",a.ip," ")}}function v(e,t){1&e&&(p.Sb(0,"mat-header-cell"),p.Jc(1," CPU(%) "),p.Rb())}function w(e,t){if(1&e&&(p.Sb(0,"mat-cell"),p.Jc(1),p.Rb()),2&e){var a=t.$implicit;p.Bb(1),p.Lc(" ",a.cpu," ")}}function R(e,t){1&e&&(p.Sb(0,"mat-header-cell"),p.Jc(1," Memory(MB) - Used/Total "),p.Nb(2,"br"),p.Rb())}function N(e,t){if(1&e&&(p.Sb(0,"mat-cell"),p.Jc(1),p.Rb()),2&e){var a=t.$implicit;p.Bb(1),p.Lc(" ",a.memory," ")}}function y(e,t){1&e&&(p.Sb(0,"mat-header-cell"),p.Jc(1," Last Heartbeat "),p.Rb())}function I(e,t){if(1&e&&(p.Sb(0,"mat-cell"),p.Jc(1),p.kc(2,"date"),p.Rb()),2&e){var a=t.$implicit;p.Bb(1),p.Lc(" ",p.mc(2,1,a.lastUpdateTime,"yyyy-MM-dd HH:mm:ss")," ")}}function D(e,t){1&e&&(p.Sb(0,"mat-header-cell"),p.Jc(1,"Status "),p.Rb())}function H(e,t){1&e&&(p.Qb(0),p.Nb(1,"span",22),p.Jc(2,"\xa0 Live "),p.Pb())}function z(e,t){1&e&&(p.Nb(0,"span",23),p.Jc(1,"\xa0 Inaccessible "))}function T(e,t){if(1&e&&(p.Sb(0,"mat-cell"),p.Hc(1,H,3,0,"ng-container",20),p.Hc(2,z,2,0,"ng-template",null,21,p.Ic),p.Rb()),2&e){var a=t.$implicit,n=p.xc(3);p.Bb(1),p.qc("ngIf","alive"==a.status)("ngIfElse",n)}}function x(e,t){1&e&&(p.Sb(0,"mat-header-cell"),p.Jc(1," Actions"),p.Rb())}function M(e,t){if(1&e){var a=p.Tb();p.Sb(0,"mat-cell"),p.Sb(1,"button",24),p.fc("click",(function(){p.zc(a);var e=t.$implicit;return p.jc(2).deleteNode(e.id)})),p.Sb(2,"span",25),p.Nb(3,"i",26),p.Rb(),p.Qb(4),p.Wb(5,n),p.Pb(),p.Rb(),p.Rb()}}function O(e,t){1&e&&p.Nb(0,"mat-header-row")}function B(e,t){1&e&&p.Nb(0,"mat-row")}function P(e,t){if(1&e){var a=p.Tb();p.Sb(0,"div",6),p.Sb(1,"div",7),p.Sb(2,"mat-table",8),p.Qb(3,9),p.Hc(4,S,2,0,"mat-header-cell",10),p.Hc(5,C,2,1,"mat-cell",11),p.Pb(),p.Qb(6,12),p.Hc(7,v,2,0,"mat-header-cell",10),p.Hc(8,w,2,1,"mat-cell",11),p.Pb(),p.Qb(9,13),p.Hc(10,R,3,0,"mat-header-cell",10),p.Hc(11,N,2,1,"mat-cell",11),p.Pb(),p.Qb(12,14),p.Hc(13,y,2,0,"mat-header-cell",10),p.Hc(14,I,3,4,"mat-cell",11),p.Pb(),p.Qb(15,15),p.Hc(16,D,2,0,"mat-header-cell",10),p.Hc(17,T,4,2,"mat-cell",11),p.Pb(),p.Qb(18,16),p.Hc(19,x,2,0,"mat-header-cell",10),p.Hc(20,M,6,0,"mat-cell",11),p.Pb(),p.Hc(21,O,1,0,"mat-header-row",17),p.Hc(22,B,1,0,"mat-row",18),p.Rb(),p.Sb(23,"mat-paginator",19),p.fc("page",(function(e){return p.zc(a),p.jc().onPaginateChange(e)})),p.Rb(),p.Rb(),p.Rb()}if(2&e){var n=p.jc();p.Bb(2),p.qc("dataSource",n.dataSourceNode),p.Bb(19),p.qc("matHeaderRowDef",n.nodeColumns),p.Bb(1),p.qc("matRowDefColumns",n.nodeColumns),p.Bb(1),p.qc("length",n.nodeLength)("pageSize",n.pageSize)("pageSizeOptions",n.pageSizeOptions)}}function J(e,t){1&e&&(p.Sb(0,"div",27),p.Sb(1,"div",28),p.Sb(2,"p"),p.Wb(3,o),p.Rb(),p.Rb(),p.Rb())}n=$localize(h.a([":@@deleteNodeButton\u241f826b25211922a1b46436589233cb6f1a163d89b7\u241f7022070615528435141:Delete"],[":@@deleteNodeButton\u241f826b25211922a1b46436589233cb6f1a163d89b7\u241f7022070615528435141:Delete"])),o=$localize(h.a([":no cluster node | text messages appears when no node@@noNodeExistsMessage\u241ff62e8e254076975df05ec10d10b9e92169c26b8d\u241f2757926870653264881: There is no cluster node. "],[":no cluster node | text messages appears when no node@@noNodeExistsMessage\u241ff62e8e254076975df05ec10d10b9e92169c26b8d\u241f2757926870653264881: There is no cluster node. "]));var L=function(){function e(e,t,a,n,o,c,i,s){this.http=e,this.route=t,this.clusterRestService=a,this.renderer=n,this.router=o,this.dialog=c,this.cdr=i,this.matpage=s,this.nodeColumns=["nodeIp","cpu","memory","lastUpdateTime","inTheCluster","actions"],this.pageSize=10,this.pageSizeOptions=[10,25,50],this.pageIndex=0,this.currentOffset=0,this.dataSourceNode=new u.k}return e.prototype.setPageSizeOptions=function(e){this.pageSizeOptions=e.split(",").map((function(e){return+e}))},e.prototype.ngOnInit=function(){this.nodeTableData={dataRows:[]}},e.prototype.onPaginateChange=function(e){console.log("cluster page index:"+e.pageIndex+" length: "+e.length+" pageSize:"+e.pageSize),this.pageIndex=e.pageIndex,this.pageSize=e.pageSize,this.currentOffset=e.pageIndex*this.pageSize,this.getClusterNodes(this.currentOffset,this.pageSize)},e.prototype.ngAfterViewInit=function(){var e=this;this.getClusterNodeCount(),this.getClusterNodes(0,this.pageSize),this.timerId=window.setInterval((function(){e.getClusterNodeCount(),e.getClusterNodes(e.currentOffset,e.pageSize)}),1e4)},e.prototype.ngOnDestroy=function(){this.timerId&&clearInterval(this.timerId)},e.prototype.getClusterNodeCount=function(){var e=this;this.clusterRestService.getClusterNodeCount().subscribe((function(t){e.nodeLength=t.number}),(function(e){Object(f.d)(e)}))},e.prototype.getClusterNodes=function(e,t){var a=this;this.clusterRestService.getClusterNodes(e,t).subscribe((function(e){for(var t in a.nodeTableData.dataRows=[],e)a.nodeTableData.dataRows.push(e[t]);a.dataSourceNode=new u.k(a.nodeTableData.dataRows)}),(function(e){Object(f.d)(e)}))},e.prototype.deleteNode=function(e){var t=this;swal({title:b.a.getLocaleInterface().are_you_sure,text:b.a.getLocaleInterface().wont_be_able_to_revert,type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(){var a=t.nodeTableData.dataRows.find((function(t){return t.id==e}));t.clusterRestService.deleteClusterNodes(a).subscribe((function(e){1==e.success||t.showNodeNotDeleted(),t.getClusterNodes(t.currentOffset,t.pageSize)}),(function(e){Object(f.d)(e)}))})).catch((function(){}))},e.prototype.showNodeNotDeleted=function(){$.notify({icon:"ti-save",message:"Node can not be deleted."},{type:"warning",delay:900,placement:{from:"top",align:"right"}})},e.\u0275fac=function(t){return new(t||e)(p.Mb(l.b),p.Mb(c.a),p.Mb(r.a),p.Mb(p.G),p.Mb(c.c),p.Mb(m.b),p.Mb(p.h),p.Mb(g.b))},e.\u0275cmp=p.Gb({type:e,selectors:[["app-cluster"]],viewQuery:function(e,t){var a;1&e&&p.Oc(d.a,!0),2&e&&p.wc(a=p.gc())&&(t.sort=a.first)},inputs:{pageEvent:"pageEvent"},outputs:{pageChange:"pageChange"},decls:6,vars:2,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-lg-12","col-sm-12"],["id","nodeTable","style","text-align: left",4,"ngIf"],["class","card",4,"ngIf"],["id","nodeTable",2,"text-align","left"],[1,"mat-container","mat-elevation-z1"],[3,"dataSource"],["matColumnDef","nodeIp"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","cpu"],["matColumnDef","memory"],["matColumnDef","lastUpdateTime"],["matColumnDef","inTheCluster"],["matColumnDef","actions"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions","page"],[4,"ngIf","ngIfElse"],["showDead",""],[1,"dot","btn-success"],[1,"dot","btn-danger"],["type","button",1,"btn","btn-simple","btn-magnify","btn-danger",3,"click"],[1,"btn-label"],[1,"ti-close"],[1,"card"],[1,"card-content","text-center"]],template:function(e,t){1&e&&(p.Sb(0,"div",0),p.Sb(1,"div",1),p.Sb(2,"div",2),p.Sb(3,"div",3),p.Hc(4,P,24,6,"div",4),p.Hc(5,J,4,0,"div",5),p.Rb(),p.Rb(),p.Rb(),p.Rb()),2&e&&(p.Bb(4),p.qc("ngIf",t.nodeTableData.dataRows.length>0),p.Bb(1),p.qc("ngIf",0==t.nodeTableData.dataRows.length))},directives:[i.n,u.j,u.c,u.e,u.b,u.g,u.i,g.a,u.d,u.a,u.f,u.h],pipes:[i.f],styles:[".dot[_ngcontent-%COMP%]{height:12px;width:12px;border-radius:50%;display:inline-block}"]}),e}(),k=a("zkoq"),q=a("NFeN"),Q=a("qFsG"),j=a("MutI"),E=a("STbY"),G=a("FKr1"),U=a("d3UM"),W=a("QibW"),_=a("Xa2L"),K=a("bv9b"),X=a("Qu3c"),A=a("/t3+"),F=a("wZkO"),V=a("xHqg"),Y=a("dNgK"),Z=a("1jcm"),ee=a("5RNC"),te=a("XhcP"),ae=a("/1cH"),ne=a("bTqV"),oe=a("jaxi"),ce=a("Wp6s"),ie=a("bSwM"),se=a("A5z7"),le=a("iadO"),re=a("f0Cb"),be=a("7EHt"),de=a("kmnG"),ue=[{path:"",component:L,pathMatch:"full"}],fe=function(){function e(){}return e.\u0275mod=p.Kb({type:e}),e.\u0275inj=p.Jb({factory:function(t){return new(t||e)},imports:[[c.f.forChild(ue),i.c,de.d,Q.b,ie.b,m.f,s.f,l.c,m.f,ie.b,Q.b,ae.a,ne.b,oe.a,ce.a,se.a,le.a,re.a,be.a,k.b,q.b,j.d,E.a,G.m,g.c,K.a,_.a,W.a,G.t,U.b,te.a,ee.a,Z.a,Y.a,d.c,V.a,u.l,F.a,A.a,X.b],ie.b,m.f,de.d,Q.b,m.f,ie.b,de.d,Q.b,ae.a,ne.b,oe.a,ce.a,se.a,le.a,re.a,be.a,k.b,q.b,j.d,E.a,G.m,g.c,K.a,_.a,W.a,G.t,U.b,te.a,ee.a,Z.a,Y.a,d.c,V.a,u.l,F.a,A.a,X.b]}),e}()}}]);