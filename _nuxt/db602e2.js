(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{268:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("652d82a5",content,!0,{sourceMap:!1})},299:function(t,e,n){"use strict";n(268)},300:function(t,e,n){var r=n(52)((function(i){return i[1]}));r.push([t.i,".container[data-v-1c566ee2]{list-style-type:none;padding-left:0}.list-item[data-v-1c566ee2]{list-style:none}.button[data-v-1c566ee2]{background-color:transparent;margin-bottom:.2em;padding:.1em .5em}",""]),r.locals={},t.exports=r},315:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(31),n(35),n(182),{name:"page-list",props:{byTag:String,byPath:String,deep:Boolean},data:function(){return{articles:[]}},computed:{byTagArray:function(){return this.byTag?Array.isArray(this.byTag)?this.byTag:this.byTag.split(",").map((function(s){return s.trim()})):[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.byPath?t.$content(t.byPath,{deep:t.deep}).where({slug:{$ne:"_index"}}):t.$content({deep:!0}),t.byTagArray.length>0&&(n=n.where({tags:{$contains:t.byTagArray}})),n=n.only(["slug","title","tags","path"]).sortBy("title","asc"),e.next=5,n.fetch();case 5:t.articles=e.sent;case 6:case"end":return e.stop()}}),e)})))()}}),c=(n(299),n(44)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("ul",{staticClass:"container"},t._l(t.articles,(function(n){return e("li",{staticClass:"list-item"},[e("nuxt-link",{staticClass:"button",attrs:{to:n.path}},[t._v(t._s(n.title))])],1)})),0)])}),[],!1,null,"1c566ee2",null);e.default=component.exports}}]);