(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{37:function(e,t,n){},39:function(e){e.exports=[{date:"2018-09-11",id:"jdhfzpyxmbpb"},{date:"2018-10-09",id:"jdhfzpyxnbmb"},{date:"2018-11-13",id:"jdhfzpyxpbrb"},{date:"2018-11-23",url:"https://www.vuejsroadtrip.com/"},{date:"2018-12-11",id:"jdhfzpyxqbpb"}]},40:function(e,t,n){"use strict";var a=n(37);n.n(a).a},44:function(e,t,n){"use strict";n.r(t);var a=n(39);const r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var i={name:"next-meetup",computed:{href(){const e=this.upcoming.id;return e?`https://www.meetup.com/de-DE/Vue-js-Berlin/events/${e}/`:this.upcoming.url},upcoming(){const e=Date.now();return a.find(t=>Date.parse(t.date)>e)},upcomingDate(){return new Date(this.upcoming.date)},daySuffix(){switch(this.upcomingDate){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},niceDate(){const e=this.upcomingDate,t=`0${e.getDate()}`.slice(-2);return`${r[e.getDay()]}, ${t}${this.daySuffix} of ${u[e.getMonth()]} ${e.getFullYear()}`}}},s=(n(40),n(0)),d=Object(s.a)(i,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"next-meetup"},[t("a",{attrs:{href:this.href,target:"_blank",rel:"noopener noreferrer"}},[this._v("\n    Next meetup on"),t("br"),this._v(this._s(this.niceDate)),t("OutboundLink")],1)])},[],!1,null,"7d2bae68",null);d.options.__file="next-meetup.vue";t.default=d.exports}}]);