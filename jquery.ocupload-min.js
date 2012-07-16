/*
  One Click Upload - jQuery Plugin
 --------------------------------

 Copyright (c) 2008 Michael Mitchell - http://www.michaelmitchell.co.nz
 Copyright (c) 2011 Andrey Fedoseev <andrey.fedoseev@gmail.com> - http://andreyfedoseev.name
 Copyright (c) 2012 vol7ron <supervolting@gmail.com>

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */
 (function($){$.fn.upload=function(a){a=$.extend({name:'file',enctype:'multipart/form-data',action:'',autoSubmit:true,onSubmit:function(){},onComplete:function(){},onSelect:function(){},params:{}},a);return new $.ocupload(this,a)};$.ocupload=function(e,f){var g=this;var h=new Date().getTime().toString();var i=$("<iframe></iframe>",{id:"iframe"+h,name:"iframe"+h}).css({display:"none"});var j=$("<form></form>",{method:"post",enctype:f.enctype,action:f.action,target:"iframe"+h}).css({margin:0,padding:0});var k=e.css('cursor');var l=$("<input>",{name:f.name,"type":"file"}).css({position:'absolute',display:'none',cursor:k,opacity:0});e.wrap("<div></div>");j.append(l);e.after(j);e.after(i);e.click(function(){l.click()});var m=e.parent().css({position:'relative',display:e.css('display'),height:e.outerHeight()+'px',width:e.outerWidth()+'px',overflow:'hidden',cursor:k,margin:0,padding:0});var n=l.outerHeight(1);var o=l.outerWidth(1);l.change(function(){g.onSelect();if(g.autoSubmit){g.submit()}});$.extend(this,{autoSubmit:f.autoSubmit,onSubmit:f.onSubmit,onComplete:f.onComplete,onSelect:f.onSelect,filename:function(){return l.attr('value')},params:function(a){a=a?a:false;if(a){f.params=$.extend(f.params,a)}else{return f.params}},name:function(a){a=a?a:false;if(a){l.attr('name',value)}else{return l.attr('name')}},action:function(a){a=a?a:false;if(a){j.attr('action',a)}else{return j.attr('action')}},enctype:function(a){a=a?a:false;if(a){j.attr('enctype',a)}else{return j.attr('enctype')}},set:function(c,d){d=d?d:false;function option(a,b){switch(a){case'name':g.name(b);break;case'action':g.action(b);break;case'enctype':g.enctype(b);break;case'params':g.params(b);break;case'autoSubmit':g.autoSubmit=b;break;case'onSubmit':g.onSubmit=b;break;case'onComplete':g.onComplete=b;break;case'onSelect':g.onSelect=b;break;default:throw new Error("[jQuery.ocupload.set] '"+a+"' is an invalid option.");}}if(d){option(c,d)}else{$.each(c,function(a,b){option(a,b)})}},submit:function(){var c=this.onSubmit();if(c)return;$(".ocupload-"+h,j).remove();$.each(f.params,function(a,b){j.append($("<input>",{type:"hidden",name:a,value:b,class:"ocupload-"+h}))});j.submit();i.unbind().load(function(){var a=document.getElementById(i.attr('name'));var b=$(a.contentWindow.document.body).html();g.onComplete(b)})}})}})(jQuery);