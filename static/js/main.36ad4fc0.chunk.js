(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={gallery:"Gallery_gallery__2wFLi"}},11:function(e,t,a){e.exports={app:"App_app__2EhKl",button:"App_button__1LKWS"}},2:function(e,t,a){e.exports={photoCard:"PhotoCard_photoCard__T8OeO",stats:"PhotoCard_stats__2iisi",statsItem:"PhotoCard_statsItem__1MHD_",fullscreenButton:"PhotoCard_fullscreenButton__1u4f2"}},23:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__11fhz"}},24:function(e,t,a){e.exports=a(47)},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),l=a.n(r),c=a(12),s=a(3),i=a(4),m=a(6),u=a(5),p=a(7),d=a(8),h=a.n(d);h.a.defaults.baseURL="https://pixabay.com/api";var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return h.a.get("/?image_type=photo&orientation=horizontal&q=".concat(t,"&page=").concat(e,"&per_page=12&key=13861072-997e8257308f2a577547e7149")).then(function(e){return e.data.hits}).catch(function(e){return console.log(e)})},g=function(e){return{comments:e.comments,downloads:e.downloads,id:e.id,largeImageURL:e.largeImageURL,likes:e.likes,views:e.views,webformatURL:e.webformatURL}},b=a(23),v=a.n(b),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={input:""},a.handleInput=function(e){a.setState({input:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),(0,a.props.onSubmit)(a.state.input),a.setState({input:""})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.input;return o.a.createElement("form",{className:v.a.searchForm,onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search images...",value:e,onChange:this.handleInput}))}}]),t}(n.Component),_=a(9),E=a.n(_),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).overlayRef=Object(n.createRef)(),a.handleEsc=function(e){var t=a.props.modalClosed;27===e.keyCode&&t()},a.handleClick=function(e){var t=a.props.modalClosed;e.target===a.overlayRef.current&&t()},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEsc)}},{key:"render",value:function(){var e=this.props.largeImage;return o.a.createElement("div",{className:E.a.overlay,onClick:this.handleClick,onKeyDown:function(){},role:"button",tabIndex:0,ref:this.overlayRef},o.a.createElement("div",{className:E.a.modal},o.a.createElement("img",{src:e,alt:"Large images"})))}}]),t}(n.PureComponent),N=a(10),O=a.n(N),I=a(2),C=a.n(I),k=function(e){var t=e.imageItem,a=t.webformatURL,n=t.likes,r=t.views,l=t.comments,c=t.downloads,s=t.largeImageURL,i=e.modalOpened;return o.a.createElement("div",{className:C.a.photoCard},o.a.createElement("img",{src:a,alt:"Images not found"}),o.a.createElement("div",{className:C.a.stats},o.a.createElement("p",{className:C.a.statsItem},o.a.createElement("i",{className:"material-icons"},"thumb_up"),n),o.a.createElement("p",{className:C.a.statsItem},o.a.createElement("i",{className:"material-icons"},"visibility"),r),o.a.createElement("p",{className:C.a.statsItem},o.a.createElement("i",{className:"material-icons"},"comment"),l),o.a.createElement("p",{className:C.a.statsItem},o.a.createElement("i",{className:"material-icons"},"cloud_download"),c)),o.a.createElement("button",{type:"button",className:C.a.fullscreenButton,onClick:function(){return i(s)}},o.a.createElement("i",{className:"material-icons"},"zoom_out_map")))},S=function(e){var t=e.images,a=e.modalOpened;return o.a.createElement("ul",{className:O.a.gallery},t.map(function(e){return o.a.createElement("li",{key:e.id,className:O.a.galleryItem},o.a.createElement(k,{imageItem:e,modalOpened:a}))}))},j=a(11),L=a.n(j),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={images:[],query:null,largeImage:!1,pageNumber:1},a.modalOpened=function(e){a.setState({largeImage:e})},a.modalClosed=function(){a.setState({largeImage:null})},a.onSubmit=function(e){var t=a.state.pageNumber;a.setState({query:e,pageNumber:1},function(){f(t,e).then(function(e){a.setState({images:e.map(g)})}).catch(function(e){return console.log(e)})})},a.loadMore=function(){var e=a.state,t=e.pageNumber,n=e.query,o=e.images;f(t,n).then(function(e){a.setState({images:[].concat(Object(c.a)(o),Object(c.a)(e.map(g)))}),window.scrollTo({top:1e5,behavior:"smooth"})})},a.handleLoadMore=function(){a.setState(function(e){return{pageNumber:e.pageNumber+1}},a.loadMore())},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.pageNumber;f(t).then(function(t){e.setState({images:t.map(g)})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.largeImage;return o.a.createElement("div",{className:L.a.app},o.a.createElement(y,{onSubmit:this.onSubmit}),o.a.createElement(S,{images:t,modalOpened:this.modalOpened}),a&&o.a.createElement(w,{largeImage:a,modalClosed:this.modalClosed}),o.a.createElement("button",{type:"button",className:L.a.button,onClick:this.handleLoadMore},"Load more"))}}]),t}(n.Component);a(46);l.a.render(o.a.createElement(R,null),document.getElementById("root"))},9:function(e,t,a){e.exports={overlay:"Modal_overlay__3IAGa",modal:"Modal_modal__1uqKR"}}},[[24,1,2]]]);
//# sourceMappingURL=main.36ad4fc0.chunk.js.map