(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{510:function(e,t,a){"use strict";var n=a(18),o=a(50),s=a(501),l=a(38),i=a(2),r=a.n(i),c=a(61),d=a.n(c),p=a(499),u=a.n(p),m=a(500),h={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:m.q,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],s=e.block,l=e.className,i=e.close,c=e.cssModule,d=e.color,p=e.outline,h=e.size,b=e.tag,f=e.innerRef,g=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&"undefined"===typeof g.children&&(g.children=r.a.createElement("span",{"aria-hidden":!0},"\xd7"));var C="btn"+(p?"-outline":"")+"-"+d,E=Object(m.m)(u()(l,{close:i},i||"btn",i||C,!!h&&"btn-"+h,!!s&&"btn-block",{active:t,disabled:this.props.disabled}),c);g.href&&"button"===b&&(b="a");var O=i?"Close":null;return r.a.createElement(b,Object(n.a)({type:"button"===b&&g.onClick?"button":void 0},g,{className:E,ref:f,onClick:this.onClick,"aria-label":a||O}))},t}(r.a.Component);b.propTypes=h,b.defaultProps={color:"secondary",tag:"button"},t.a=b},512:function(e,t,a){"use strict";var n=a(18),o=a(50),s=a(503),l=a(2),i=a.n(l),r=a(61),c=a.n(r),d=a(499),p=a.n(d),u=a(513),m=a(500),h=Object(s.a)({},u.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:m.q,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),b=Object(s.a)({},u.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:m.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function f(e){var t=e.tag,a=e.baseClass,s=e.baseClassActive,l=e.className,r=e.cssModule,c=e.children,d=e.innerRef,h=Object(o.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),b=Object(m.o)(h,m.c),f=Object(m.n)(h,m.c);return i.a.createElement(u.Transition,b,(function(e){var o="entered"===e,u=Object(m.m)(p()(l,a,o&&s),r);return i.a.createElement(t,Object(n.a)({className:u},f,{ref:d}),c)}))}f.propTypes=h,f.defaultProps=b,t.a=f},515:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},755:function(e,t,a){"use strict";var n=a(18),o=a(50),s=a(2),l=a.n(s),i=a(61),r=a.n(i),c=a(499),d=a.n(c),p=a(500),u={tag:p.q,wrapTag:p.q,toggle:r.a.func,className:r.a.string,cssModule:r.a.object,children:r.a.node,closeAriaLabel:r.a.string,charCode:r.a.oneOfType([r.a.string,r.a.number]),close:r.a.object},m=function(e){var t,a=e.className,s=e.cssModule,i=e.children,r=e.toggle,c=e.tag,u=e.wrapTag,m=e.closeAriaLabel,h=e.charCode,b=e.close,f=Object(o.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),g=Object(p.m)(d()(a,"modal-header"),s);if(!b&&r){var C="number"===typeof h?String.fromCharCode(h):h;t=l.a.createElement("button",{type:"button",onClick:r,className:Object(p.m)("close",s),"aria-label":m},l.a.createElement("span",{"aria-hidden":"true"},C))}return l.a.createElement(u,Object(n.a)({},f,{className:g}),l.a.createElement(c,{className:Object(p.m)("modal-title",s)},i),b||t)};m.propTypes=u,m.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=m},756:function(e,t,a){"use strict";var n=a(18),o=a(50),s=a(2),l=a.n(s),i=a(61),r=a.n(i),c=a(499),d=a.n(c),p=a(500),u={tag:p.q,className:r.a.string,cssModule:r.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.tag,i=Object(o.a)(e,["className","cssModule","tag"]),r=Object(p.m)(d()(t,"modal-body"),a);return l.a.createElement(s,Object(n.a)({},i,{className:r}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},757:function(e,t,a){"use strict";var n=a(18),o=a(50),s=a(2),l=a.n(s),i=a(61),r=a.n(i),c=a(499),d=a.n(c),p=a(500),u={tag:p.q,className:r.a.string,cssModule:r.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.tag,i=Object(o.a)(e,["className","cssModule","tag"]),r=Object(p.m)(d()(t,"modal-footer"),a);return l.a.createElement(s,Object(n.a)({},i,{className:r}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},760:function(e,t,a){},763:function(e,t,a){"use strict";var n=a(503),o=a(18),s=a(501),l=a(38),i=a(2),r=a.n(i),c=a(61),d=a.n(c),p=a(499),u=a.n(p),m=a(160),h=a.n(m),b=a(500),f={children:d.a.node.isRequired,node:d.a.any},g=function(e){function t(){return e.apply(this,arguments)||this}Object(l.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.f?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(r.a.Component);g.propTypes=f;var C=g,E=a(512);function O(){}var v=d.a.shape(E.a.propTypes),y={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:v,modalTransition:v,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool},k=Object.keys(y),j={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:O,onClosed:O,modalTransition:{timeout:b.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.e.Fade},unmountOnClose:!0,returnFocusAfterClose:!0},N=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(s.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(s.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(s.a)(a)),a.handleEscape=a.handleEscape.bind(Object(s.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(s.a)(a)),a.handleTab=a.handleTab.bind(Object(s.a)(a)),a.onOpened=a.onOpened.bind(Object(s.a)(a)),a.onClosed=a.onClosed.bind(Object(s.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(s.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(s.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(l.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),n&&n(),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),this.props.isOpen&&this.close()),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||O)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||O)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.h.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),a=t.length;if(0!==a){for(var n=this.getFocusedChild(),o=0,s=0;s<a;s+=1)if(t[s]===n){o=s;break}e.shiftKey&&0===o?(e.preventDefault(),t[a-1].focus()):e.shiftKey||o!==a-1||(e.preventDefault(),t[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===b.l.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,document.body.appendChild(this._element)),this._originalBodyPadding=Object(b.i)(),Object(b.g)(),0===t.openCount&&(document.body.className=u()(document.body.className,Object(b.m)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){this._element&&(document.body.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(b.m)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(b.p)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.n)(this.props,k);return r.a.createElement("div",Object(o.a)({},a,{className:Object(b.m)(u()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),r.a.createElement("div",{className:Object(b.m)(u()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,s=a.wrapClassName,l=a.modalClassName,i=a.backdropClassName,c=a.cssModule,d=a.isOpen,p=a.backdrop,m=a.role,h=a.labelledBy,f=a.external,g=a.innerRef,O={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":h,role:m,tabIndex:"-1"},v=this.props.fade,y=Object(n.a)({},E.a.defaultProps,{},this.props.modalTransition,{baseClass:v?this.props.modalTransition.baseClass:"",timeout:v?this.props.modalTransition.timeout:0}),k=Object(n.a)({},E.a.defaultProps,{},this.props.backdropTransition,{baseClass:v?this.props.backdropTransition.baseClass:"",timeout:v?this.props.backdropTransition.timeout:0}),j=p&&(v?r.a.createElement(E.a,Object(o.a)({},k,{in:d&&!!p,cssModule:c,className:Object(b.m)(u()("modal-backdrop",i),c)})):r.a.createElement("div",{className:Object(b.m)(u()("modal-backdrop","show",i),c)}));return r.a.createElement(C,{node:this._element},r.a.createElement("div",{className:Object(b.m)(s)},r.a.createElement(E.a,Object(o.a)({},O,y,{in:d,onEntered:this.onOpened,onExited:this.onClosed,cssModule:c,className:Object(b.m)(u()("modal",l,this.state.showStaticBackdropAnimation&&"modal-static"),c),innerRef:g}),f,this.renderModalDialog()),j))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(r.a.Component);N.propTypes=y,N.defaultProps=j,N.openCount=0;t.a=N},807:function(e,t,a){"use strict";a.r(t);var n=a(515),o=a(154),s=a(155),l=a(157),i=a(156),r=a(159),c=a(158),d=a(2),p=a.n(d),u=a(504),m=a(505),h=a(507),b=a(508),f=a(538),g=a(510),C=a(763),E=a(755),O=a(756),v=a(757),y=a(526),k=a.n(y),j=(a(605),a(760),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(n.a)({},e.target.name,"number"===e.target.type?parseInt(e.target.value):e.target.value))},a.handleSubmit=function(e){var t={role:a.state.role,qualification:a.state.qualification,salary:a.state.salary,department:a.state.department,experience:a.state.experience,referalbonus:a.state.referalbonus};a.addPosts(t),a.setState((function(e){return{modal:!e.modal}}))},a.getId=function(e){console.log(e._id);var t=localStorage.getItem("token"),n={url:"https://employee-referals.herokuapp.com/api/job/jobdelete",method:"POST",headers:{"Content-Type":"application/json",Authorization:t},data:{_id:e._id}};console.log(n),k()(n).then((function(e){console.log(e),a.getPosts()}))},a.handleInputChange=function(e){a.setState({filterer:e.target.value})},a.state={posts:[],model:!1,role:"",qualification:"",salary:{value:0},department:"",experience:"",con:!0,referalbonus:{value:0},filterer:""},a.toggle=a.toggle.bind(Object(r.a)(a)),a.toggles=a.toggles.bind(Object(r.a)(a)),a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getPosts()}},{key:"toggles",value:function(e){var t=this.state.dropdownOpen.map((function(t,a){return a===e&&!t}));this.setState({dropdownOpen:t})}},{key:"getPosts",value:function(){var e=this,t={"Content-Type":"application/json",Authorization:localStorage.getItem("token")};k.a.get("https://employee-referals.herokuapp.com/api/job/adminjob/",{headers:t}).then((function(t){e.setState({posts:t.data}),console.log(t)})).catch((function(e){console.log(e)}))}},{key:"addPosts",value:function(e){var t=this,a=localStorage.getItem("token"),n={url:"https://employee-referals.herokuapp.com/api/job",method:"POST",headers:{"Content-Type":"application/json",Authorization:a},data:e};console.log(e),k()(n).then((function(e){e&&t.getPosts()})).catch((function(e){console.log(e)}))}},{key:"toggle",value:function(){this.setState((function(e){return{modal:!e.modal}}))}},{key:"render",value:function(){var e=this,t=this.state.posts.filter((function(t){if(e.state.filterer.length){var a=t.department.toLowerCase(),n=t.qualification.toLowerCase(),o=t.role.toLowerCase();return a.includes(e.state.filterer.toLowerCase())||n.includes(e.state.filterer.toLowerCase())||o.includes(e.state.filterer.toLowerCase())}return!0}));return p.a.createElement("div",null,p.a.createElement("div",{className:"animated fadeIn"},p.a.createElement(u.a,null,p.a.createElement(m.a,{xs:"12"},p.a.createElement(h.a,null,p.a.createElement(b.a,null,p.a.createElement("div",{className:"searchForm"},p.a.createElement("form",null,p.a.createElement("input",{id:"searchkey",placeholder:"Search for...",name:"filter",onChange:this.handleInputChange})))))))),p.a.createElement("div",{className:"animated fadeIn"},p.a.createElement(u.a,null,p.a.createElement(m.a,{xl:12},p.a.createElement(h.a,null,p.a.createElement(b.a,null,p.a.createElement(f.a,{responsive:!0,hover:!0},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",{scope:"col"},"Role"),p.a.createElement("th",{scope:"col"},"Qualification"),p.a.createElement("th",{scope:"col"},"Department"),p.a.createElement("th",{scope:"col"},"Experience"),p.a.createElement("th",{scope:"col"},"Salary"),p.a.createElement("th",{scope:"col"},"ReferalBonus"),p.a.createElement("th",{scope:"col"},"Delete"))),p.a.createElement("tbody",null,t.map((function(t,a){return p.a.createElement("tr",{key:t._id},p.a.createElement("th",null,t.role),p.a.createElement("th",null,t.qualification),p.a.createElement("td",null,t.department),p.a.createElement("td",null,t.experience),p.a.createElement("td",null,t.salary),p.a.createElement("td",null,t.referalbonus),p.a.createElement("button",{className:"btn btn-danger",onClick:function(a){e.getId(t)}},"Delete"))}))))))))),p.a.createElement("div",{className:"but"},p.a.createElement(g.a,{className:"Button",onClick:this.toggle},this.props.buttonLabel,"ADD"),p.a.createElement(C.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},p.a.createElement(E.a,{toggle:this.toggle},"ADD JOB"),p.a.createElement(O.a,null,p.a.createElement("div",{className:"base-container"},p.a.createElement("div",{className:"content"},p.a.createElement("div",{className:"form"},p.a.createElement("div",{className:"form-group"},p.a.createElement("label",{htmlFor:"empid"},"Role    ."),p.a.createElement("input",{type:"text",id:"role",name:"role",placeholder:"role",onChange:this.handleChange})),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",{htmlFor:"empid"},"Qualification."),p.a.createElement("input",{type:"text",id:"qualification",name:"qualification",placeholder:"qualification",onChange:this.handleChange})),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",{htmlFor:"username"},"Salary."),p.a.createElement("input",{type:"number",id:"salary",name:"salary",placeholder:"salary",onChange:this.handleChange})),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",{htmlFor:"email"},"Department."),p.a.createElement("input",{type:"text",id:"department",name:"department",placeholder:"department",onChange:this.handleChange})),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",{htmlFor:"password"},"Experience."),p.a.createElement("input",{type:"text",id:"experience",name:"experience",placeholder:"experience",onChange:this.handleChange})),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",{htmlFor:"phone"},"ReferalBonus."),p.a.createElement("input",{type:"number",id:"referalbonus",name:"referalbonus",placeholder:"referalbonus",onChange:this.handleChange})))))),p.a.createElement(v.a,null,p.a.createElement(g.a,{color:"primary",onClick:this.handleSubmit},"Submit"),p.a.createElement(g.a,{color:"secondary",onClick:this.toggle},"Cancel")))))}}]),t}(d.Component));t.default=j}}]);
//# sourceMappingURL=20.ba27ef7f.chunk.js.map