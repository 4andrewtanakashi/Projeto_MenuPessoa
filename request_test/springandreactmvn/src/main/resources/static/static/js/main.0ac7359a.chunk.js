(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),i=(n(14),n(3)),l=n(6),u=n(4),s=n(7),m=(n(15),n(5)),h=n.n(m),p=(n(16),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){n.setState({request:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.request.trim();t&&fetch("/root?request=".concat(t)).then(function(e){return e.text()}).then(function(e){alert(e)})},n.render=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-header"},o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),o.a.createElement("h2",null,"Try request ?")),o.a.createElement("div",null,o.a.createElement("form",{className:"App-intro",onSubmit:n.handleSubmit},o.a.createElement("input",{type:"text",onChange:n.handleChange}),o.a.createElement("input",{type:"submit",value:"Echo"}))))},n}return Object(s.a)(t,e),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.0ac7359a.chunk.js.map