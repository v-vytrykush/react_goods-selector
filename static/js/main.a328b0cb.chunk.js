(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),o=c(6),a=c(4),r=c(5),l=c(8),d=c(7),i=c(1),u=c.n(i),h=(c(13),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:["Jam"]},e.handleClick=function(t){e.state.selectedGoods.includes(t)?e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}})):(e.setState((function(e){return{selectedGoods:[].concat(Object(o.a)(e.selectedGoods),[t])}})),console.log(e.state.selectedGoods))},e.clearGoods=function(){e.setState({selectedGoods:[]})},e.checkGoods=function(e){switch(e.length){case 0:return"No selected good";case 1:return"".concat(e[0]," is selected");case 2:return"".concat(e.join(" and ")," are selected");default:return"".concat(e.slice(0,-1).join(", ")," and ").concat(e[e.length-1]," are selected")}},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("h1",{className:"h1 text-primary",children:["Selected goods:",Object(h.jsx)("p",{className:"h2 text-danger",children:this.checkGoods(t)}),Object(h.jsx)("button",{type:"button",className:"btn-default",onClick:this.clearGoods,children:"Clear all"})]}),Object(h.jsx)("ul",{className:"list-group",children:j.map((function(c){return Object(h.jsxs)("li",{className:"list-group-item",children:[Object(h.jsx)("button",{type:"button",className:"btn-primary",onClick:function(){e.handleClick(c)},children:t.includes(c)?"Remove":"Select"}),Object(h.jsx)("span",{className:"item",children:c})]},c)}))})]})}}]),c}(u.a.Component),m=b;n.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a328b0cb.chunk.js.map