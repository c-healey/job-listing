(this["webpackJsonpjob-listing"]=this["webpackJsonpjob-listing"]||[]).push([[0],{23:function(e,t,a){e.exports=a(48)},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),i=a.n(l),s=a(8),c=a.n(s),o=a(20),u=a(9),f=a(2),d=a(3),m=a(5),b=a(4),p=a(21),v=a.n(p),h=a(22),g=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onClickEvent=function(t){"clear-filters"===t.target.id?Object(h.a)(document.querySelectorAll(".filter-field")).forEach((function(e){e.classList.add("hide")})):t.target.id.length>0&&t.target.classList.add("hide");e.props.onClearFilters(t.target.id,t.target.innerHTML)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.filters;return r.a.createElement("div",{className:"filter-card","data-filter":"clearFilters",onClick:function(t){e.onClickEvent(t)}},r.a.createElement("div",{className:"filters"},t.map((function(e){return r.a.createElement("button",{className:"btn btn--sqr btn--sm btn-job-detail filter-field hide",key:e.replace(" ",""),id:"f"+e.replace(" ",""),"data-filter":"picked-filter"},e)}))),r.a.createElement("button",{className:"clear-filters btn bt--sqr btn--sm btn--txt",id:"clear-filters"},"Clear"))}}]),a}(r.a.Component),j=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.item;return r.a.createElement("div",{className:e.featured?"card featured":"card",key:e.id},r.a.createElement("div",{className:"company-logo"},r.a.createElement("img",{src:e.logo,alt:"company logo"})),r.a.createElement("div",{className:"grid left job-profile"},r.a.createElement("h2",null,e.company),r.a.createElement("div",{className:"grid col-2 left"},r.a.createElement("button",{className:e.new?"btn  btn--sm btn-new":"hide"},"New!"),r.a.createElement("button",{className:e.featured?"btn  btn--sm btn-featured":"hide"},"Featured")),r.a.createElement("span",{className:"full-width position"},e.position),r.a.createElement("ul",{className:"menu--dot full-width"},r.a.createElement("li",{className:" filter-option","data-filter":"postedAt"},e.postedAt),r.a.createElement("li",{className:"dot filter-option","data-filter":"contract"},e.contract),r.a.createElement("li",{className:"dot filter-option","data-filter":"location"},e.location))),r.a.createElement("div",{className:"grid left job-detail"},r.a.createElement("button",{className:"btn btn--sqr btn--sm btn-job-detail filter-option","data-filter":"role"},e.role),r.a.createElement("button",{className:"btn btn--sqr btn--sm btn-job-detail filter-option","data-filter":"level"},e.level),e.languages?e.languages.map((function(t,a){return r.a.createElement("button",{className:"btn btn--sqr btn--sm btn-job-detail filter-option","data-filter":"languages",key:e.id+t},t)})):"",e.tools?e.tools.map((function(t,a){return r.a.createElement("button",{className:"btn btn--sqr btn--sm btn-job-detail  filter-option","data-filter":"tools",key:e.id+t},t)})):""))}}]),a}(r.a.Component),E=(a(46),function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onClickResultList=function(t){if(t.target.classList.contains("filter-option")){var a=t.target.innerHTML,n=t.target.dataset.filter;document.querySelector("#f".concat(t.target.innerHTML.replace(" ",""))).classList.remove("hide"),e.props.onSetFilters(n,a,"add")}},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;if(this.props.jobs.length>0){var t=this.props.jobs.map((function(e,t){return r.a.createElement(j,{key:t,item:e})}));return r.a.createElement("div",{className:"results"},r.a.createElement("div",{className:"result-list",onClick:function(t){e.onClickResultList(t)}},t))}return r.a.createElement("div",null,"Oh NO jobs. Bummer")}}]),a}(r.a.Component)),y=(a(47),function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={jobs:[],jobsFiltered:[],filters:[],filtersPicked:{}},e.noFiltersPicked={tools:[],languages:[],role:[],level:[],postedAt:[],contract:[],location:[]},e.setFilters=function(t,a,n){var r=!0,l=JSON.parse(JSON.stringify(e.state.filtersPicked));if("add"===n)l[t]&&!l[t].includes(a)&&(r=!1,l[t].push(a));else if("clear"===n)for(var i in l)l[i].includes(a)&&(l[i]=l[i].filter((function(e){return e!==a}))),l[i].length>0&&(r=!1);var s=[];s=r?JSON.parse(JSON.stringify(e.state.jobs)):e.state.jobs.filter((function(e){for(var t in l)if(l[t].length>0&&e[t]&&e[t].length>0){if("string"===typeof e[t]&&l[t].includes(e[t]))return!0;var a,n=Object(u.a)(e[t]);try{for(n.s();!(a=n.n()).done;){var r=a.value;if(l[t].includes(r))return!0}}catch(i){n.e(i)}finally{n.f()}}return!1})),e.setState({filtersPicked:l,jobsFiltered:s})},e.clearFilters=function(t,a){"clear-filters"===t?e.setState({filtersPicked:e.noFiltersPicked,jobsFiltered:e.state.jobs.map((function(e){return e}))}):e.setFilters(t,a,"clear")},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("./data.json");case 2:t=e.sent,a=[],t.data.forEach((function(e){for(var t in e)if(e[t])if(["languages","tools"].includes(t)){var n,r=Object(u.a)(e[t]);try{for(r.s();!(n=r.n()).done;){var l=n.value;a.includes(l)||a.push(l)}}catch(i){r.e(i)}finally{r.f()}}else["role","level","postedAt","contract","location","languages","tools"].includes(t)&&!a.includes(e[t])&&a.push(e[t])})),console.log(a.sort()),this.setState({jobs:t.data,jobsFiltered:t.data,filters:a.sort(),filtersPicked:JSON.parse(JSON.stringify(this.noFiltersPicked))});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content center-col"},r.a.createElement(g,{filters:this.state.filters,onClearFilters:this.clearFilters}),r.a.createElement(E,{jobs:this.state.jobsFiltered,onSetFilters:this.setFilters})))}}]),a}(r.a.Component));i.a.render(r.a.createElement(y,null),document.querySelector("#root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.3752e7ee.chunk.js.map