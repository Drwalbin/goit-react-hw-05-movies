"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[421],{421:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r=e(689),a=e(433),c=e(997),u=e(791),i=e(124),o=e(317),s=e(184),p=function(){var t=function(t){var n=(0,u.useState)(null),e=(0,c.Z)(n,2),r=e[0],o=e[1];return(0,u.useEffect)((function(){t&&(0,i.d5)(t).then((function(t){o((0,a.Z)(t))}))}),[t]),{cast:r}}((0,r.UO)().movieId),n=t.cast;return n?(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:n.map((function(t){return(0,s.jsxs)("li",{children:[null===t.profile_path?(0,s.jsx)("p",{style:{fontSize:"70px",margin:"0"},children:"\u2754"}):(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(t.profile_path),alt:"".concat(t.name),width:"80"}),(0,s.jsx)("p",{children:t.name}),(0,s.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})}):(0,s.jsx)(o.a,{})}},124:function(t,n,e){e.d(n,{Bt:function(){return h},DD:function(){return p},d5:function(){return f},k1:function(){return o},on:function(){return s}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="a29bb1e61ff697cf767271fcbd271c6b",o=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=421.92b258d1.chunk.js.map