(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{pQIV:function(t,e,o){"use strict";o.r(e),o.d(e,"LogsModule",(function(){return p}));var i=o("tyNb"),n=o("ofXK"),r=o("3Pt+"),s=o("tk/3"),l=o("U/Bw"),c=o("OLhb"),g=o("fXoL"),b=[{path:"",children:[{path:"",component:function(){function t(t,e){this.restService=t,this.router=e,this.textConsoleLog="ConsoleLog",this.textErrorLog="ErrorLog",this.serverLogType="server",this.errorLogType="error",this.logFileOffset=-1}return t.prototype.ngOnInit=function(){var t=this;this.activeLogType=this.serverLogType,this.timerId=window.setInterval((function(){t.getConsoleLogFile()}),1e4)},t.prototype.ngAfterViewInit=function(){this.getConsoleLogFile()},t.prototype.ngOnDestroy=function(){clearInterval(this.timerId)},t.prototype.getConsoleLogFile=function(){var t=this;this.restService.getLogFile(this.logFileOffset,this.activeLogType).subscribe((function(e){t.logFileText+=e.logContent,-1==t.logFileOffset?e.logFileSize>0&&(t.logFileOffset=e.logFileSize):t.logFileOffset+=e.logContentSize}),(function(t){Object(c.d)(t)}))},t.prototype.logChanged=function(t){this.logFileOffset=-1,this.logFileText="",t==this.textConsoleLog&&(this.activeLogType=this.serverLogType),t==this.textErrorLog&&(this.activeLogType=this.errorLogType),this.getConsoleLogFile()},t.prototype.isMobileMenu=function(){return $(window).width()>991},t.\u0275fac=function(e){return new(e||t)(g.Mb(l.e),g.Mb(i.c))},t.\u0275cmp=g.Gb({type:t,selectors:[["logs-cmp"]],decls:19,vars:3,consts:[[1,"main-content"],[1,"container-fluid"],[1,"card"],[1,"card-content"],[1,"row"],[1,"col-lg-12"],[1,"col-xs-12"],[1,"col-sm-12"],["type","button","data-toggle","dropdown","data-size","2",1,"btn","dropdown-toggle","btn-block",3,"change"],["value","ConsoleLog"],["value","ErrorLog"],[1,"col-sm-12",2,"margin-top","20px"],[1,"form-group"],["placeholder","","rows","25",1,"form-control"]],template:function(t,e){1&t&&(g.Sb(0,"div",0),g.Sb(1,"div",1),g.Sb(2,"div",2),g.Sb(3,"div",3),g.Sb(4,"div",4),g.Sb(5,"div",5),g.Sb(6,"div",4),g.Sb(7,"div",6),g.Sb(8,"div",7),g.Sb(9,"select",8),g.fc("change",(function(t){return e.logChanged(t.target.value)})),g.Sb(10,"option",9),g.Jc(11),g.Rb(),g.Sb(12,"option",10),g.Jc(13),g.Rb(),g.Rb(),g.Rb(),g.Sb(14,"div",11),g.Sb(15,"fieldset"),g.Sb(16,"div",12),g.Sb(17,"textarea",13),g.Jc(18),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb()),2&t&&(g.Bb(11),g.Kc(e.textConsoleLog),g.Bb(2),g.Kc(e.textErrorLog),g.Bb(5),g.Kc(e.logFileText))},directives:[r.o,r.w],encapsulation:2}),t}()}]}],p=function(){function t(){}return t.\u0275mod=g.Kb({type:t}),t.\u0275inj=g.Jb({factory:function(e){return new(e||t)},imports:[[n.c,i.f.forChild(b),r.f,s.c]]}),t}()}}]);