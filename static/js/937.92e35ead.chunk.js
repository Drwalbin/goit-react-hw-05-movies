"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[937],{7937:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(9439),a=n(1087),u=n(2791),c=n(3433),i=n(1124),o="MoviesPage_container__jgAeo",s=n(4317),p={input:"Searchbar_input__19umw"},f=n(184),v=function(e){var t=e.handleSubmit;return(0,f.jsxs)("form",{onSubmit:t,children:[(0,f.jsx)("input",{className:p.input,type:"text",name:"movieName"}),(0,f.jsx)("button",{type:"submit",className:p.submit,children:"Search"})]})},h=(0,u.lazy)((function(){return n.e(112).then(n.bind(n,1112))})),m=function(){var e,t=(0,a.lr)(),n=(0,r.Z)(t,2),p=n[0],m=n[1],d=function(e){var t=(0,u.useState)([]),n=(0,r.Z)(t,2),a=n[0],o=n[1];return(0,u.useEffect)((function(){""!==e&&(0,i.on)(e).then((function(e){o((0,c.Z)(e.results))}))}),[e]),{movies:a}}(null!==(e=p.get("query"))&&void 0!==e?e:""),l=d.movies;return(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)(v,{handleSubmit:function(e){e.preventDefault();var t=e.currentTarget;m({query:t.elements.movieName.value.toLowerCase()}),t.reset()}}),(0,f.jsx)(u.Suspense,{fallback:(0,f.jsx)(s.a,{}),children:(0,f.jsx)(h,{movies:l})})]})}},1124:function(e,t,n){n.d(t,{Bt:function(){return v},DD:function(){return p},d5:function(){return f},k1:function(){return o},on:function(){return s}});var r=n(5861),a=n(7757),u=n.n(a),c=n(1243),i="a29bb1e61ff697cf767271fcbd271c6b",o=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=937.92e35ead.chunk.js.map