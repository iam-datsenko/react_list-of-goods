(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),o=s.n(r),c=s(5),i=s(6),a=s(9),l=s(7),u=s(8),b=s(1),h=s(2),d=s.n(h),p=(s(14),s(15),s(0)),j=function(t){var e=t.reorderedGoods;return Object(p.jsx)("ul",{children:e.map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},t)}))})},y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var v=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(c.a)(this,s);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:n.NONE},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.sortByAlphabet=function(){t.setState({sortType:n.ALPHABET})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({sortType:n.NONE,isReversed:!1})},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this.state,e=t.sortType,s=t.isReversed,r=function(t,e){var s=e.sortType,r=e.isReversed,o=Object(u.a)(t);return o.sort((function(t,e){switch(s){case n.LENGTH:return t.length-e.length;case n.ALPHABET:return t.localeCompare(e);default:return 0}})),r&&o.reverse(),o}(y,this.state);return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",onClick:this.sortByLength,className:d()("button is-success",{"is-light":e!==n.LENGTH}),children:"Sort by length"}),Object(p.jsx)("button",{type:"button",onClick:this.sortByAlphabet,className:d()("button is-info",{"is-light":e!==n.ALPHABET}),children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",onClick:this.reverse,className:d()("button is-warning",{"is-light":!s}),children:"Reverse"}),(e!==n.NONE||s)&&Object(p.jsx)("button",{type:"button",onClick:this.reset,className:"button is-danger is-light",children:"Reset"})]}),Object(p.jsx)(j,{reorderedGoods:r})]})}}]),s}(b.Component);o.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.29fa4cdc.chunk.js.map