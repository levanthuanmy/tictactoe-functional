(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{11:function(e,t,r){"use strict";r.r(t),r.d(t,"Game",(function(){return o}));var n=r(2),a=r(1),s=r(4),c=r.n(s),i=(r(9),r(0)),l=function(e){var t=e.styleSquare,r=e.onClick,n=e.value;return Object(i.jsx)("button",{className:t,onClick:r,children:n})},u=function(e){var t=e.map,r=e.squares,n=e.onClick,a=e.styleSquare;return Object(i.jsx)(i.Fragment,{children:t.map((function(e){return Object(i.jsx)("div",{className:"board-row",children:e.map((function(e){return Object(i.jsx)("label",{children:Object(i.jsx)(l,{value:r[e],onClick:function(){return n(e)},styleSquare:a[e]})},e)}))},e)}))})},o=function(){var e=Object(a.useState)(3),t=Object(n.a)(e,2),r=t[0],s=t[1],c=Object(a.useState)([[0,1,2],[3,4,5],[6,7,8]]),l=Object(n.a)(c,2),o=l[0],j=l[1],f=Object(a.useState)([{squares:Array(9).fill(null),lastMove:null}]),v=Object(n.a)(f,2),d=v[0],h=v[1],O=Object(a.useState)(0),x=Object(n.a)(O,2),m=x[0],p=x[1],q=Object(a.useState)(!0),g=Object(n.a)(q,2),k=g[0],y=g[1],S=Object(a.useState)(Array(9).fill("square")),C=Object(n.a)(S,2),N=C[0],M=C[1],A=Object(a.useState)(!1),w=Object(n.a)(A,2),z=w[0],D=w[1],G=Object(a.useState)(""),X=Object(n.a)(G,2),E=X[0],I=X[1],J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;if(!(e<3)){F(0);for(var t=e*e,r=[],n=0;n<t;n++){for(var a=[],c=n;c<e+n;c++)a.push(c);r.push(a),n+=e-1}s(e),j(r),h([{squares:Array(t).fill(null),lastMove:null}]),M(Array(t).fill("square"))}},B=function(e,t){null===e||void 0===e||e.map((function(e){return t[e]+=" active-square",null})),M(t)},F=function(e){var t=d.slice(0,e+1),n=t[t.length-1].squares.slice(),a=N.slice(),s=b(r,n);p(e),y(e%2===0),s?B(s,a):M(Array(r*r).fill("square"))};return Object(a.useEffect)((function(){var e,t=b(r,d[m].squares);t?I("Winner: "+(null===(e=d[m])||void 0===e?void 0:e.squares[t[0]])):d[m].squares.includes(null)?I("Next player: "+(k?"X":"O")):I("Draw!")}),[d,r,m,k]),Object(i.jsxs)("div",{className:"game",children:[Object(i.jsxs)("div",{className:"game-info",children:[Object(i.jsx)("div",{className:"status",children:E}),Object(i.jsxs)("p",{children:["Current size: ",r,"x",r]}),Object(i.jsxs)("div",{className:"btn-wrapper",children:[Object(i.jsx)("button",{onClick:function(){return J(r+1)},children:"Increase the size of the board by 1 unit"}),Object(i.jsx)("button",{onClick:function(){return J(r-1)},children:"Decrease the size of the board by 1 unit (min 3)"}),Object(i.jsx)("button",{onClick:function(){return J(3)},children:"Reset size"}),Object(i.jsx)("button",{onClick:function(){return D(!z)},children:z?"Ascending Order":"Descending Order"})]}),Object(i.jsx)("ol",{className:"wrapper-history",children:null===d||void 0===d?void 0:d.map((function(e,t){z&&(t=d.length-1-t);var n=t?Object(i.jsxs)("div",{style:{textAlign:"start"},children:["Go to move #",t,Object(i.jsx)("br",{}),"X: ",d[t].lastMove[0],", Y: ",d[t].lastMove[1],Object(i.jsx)("br",{})," Player: ",d[m].squares[d[t].lastMove[0]+d[t].lastMove[1]*r]]}):"Go to game start";return Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:function(){return F(t)},className:t===m?"hightlight-btn":"",children:n})},t)}))})]}),Object(i.jsx)("div",{className:"game-board",children:Object(i.jsx)(u,{map:o,squares:d[m].squares,onClick:function(e){return function(e){var t=d.slice(0,m+1),n=t[t.length-1].squares.slice(),a=N.slice(),s=[e%r,Math.floor(e/r)];if(!b(r,n)&&!n[e]){n[e]=k?"X":"O";var c=b(r,n);h(t=t.concat([{squares:n,lastMove:s}])),p(t.length-1),y(!k),c&&B(c,a)}}(e)},styleSquare:N})})]})};c.a.render(Object(i.jsx)(o,{}),document.getElementById("root"));var b=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=arguments.length>1?arguments[1]:void 0,r=e<5?3:5,n=e*e||t.length,a=[],s=!1,c=0;c<n;c++)if(t[c]){s=!0,a=[c];for(var i=1;i<r;i++){if(c+i*(e+1)>n||t[c]!==t[c+i*(e+1)]){s=!1;break}a.push(c+i*(e+1))}if(s)return a}for(var l=0;l<n;l++)if(t[l]&&!(l%e<r-1)){s=!0,a=[l];for(var u=1;u<r;u++){var o=l+u*(e-1);if(o<0||t[l]!==t[o]){s=!1;break}a.push(o)}if(s)return a}for(var b=0;b<e;b++)for(var j=0;j<e-r+1;j++){var f=b*e+j;if(t[f]){s=!0,a=[f];for(var v=1;v<r;v++){if(t[f]!==t[f+v]){s=!1;break}a.push(f+v)}if(s)return a}}for(var d=0;d<e-r+1;d++)for(var h=0;h<e;h++){var O=d*e+h;if(t[O]){s=!0,a=[O];for(var x=1;x<r;x++){if(t[O]!==t[O+x*e]){s=!1;break}a.push(O+x*e)}if(s)return a}}return null}},9:function(e,t,r){}},[[11,1,2]]]);
//# sourceMappingURL=main.7b1fe047.chunk.js.map