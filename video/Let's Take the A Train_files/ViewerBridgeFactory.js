!function(e){function t(t){for(var n,s,a=t[0],c=t[1],p=t[2],u=0,f=[];u<a.length;u++)s=a[u],i[s]&&f.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(h&&h(t);f.length;)f.shift()();return o.push.apply(o,p||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},i={14:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Panopto/Scripts/Panopto/Bundles/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var p=0;p<a.length;p++)t(a[p]);var h=c;o.push([261,0]),r()}({1:function(e,t){e.exports=_},261:function(e,t,r){"use strict";r.r(t);var n,i=r(0),o=r(13),s=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=function(e){function t(t,r){return e.call(this,t,r)||this}return s(t,e),t.prototype.componentDidMount=function(){this.props.container.register(this)},t}(i.Component),c=r(1),p=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),h=function(e){function t(t){var r=e.call(this,t)||this;return r.fireEventTabSelected=r.fireEventTabSelected.bind(r),r.state={},r}return p(t,e),t.prototype.render=function(){return i.createElement("div",null)},t.prototype.componentDidMount=function(){e.prototype.componentDidMount.call(this),this.handlePropsUpdating({})},t.prototype.componentDidUpdate=function(e,t){this.props!==e&&this.handlePropsUpdating(e),this.state!==t&&this.handleStateUpdating(t)},t.prototype.fireEventTabSelected=function(e){this.props.fireEventTabSelected(),this.setState({selectedTab:e,lastSelectedTab:this.state.selectedTab})},t.prototype.handlePropsUpdating=function(e){var t,r=this.state.tabSet,n=!1;if(this.props.eventTabLogic!==e.eventTabLogic&&(r=this.props.eventTabLogic.createTabs(this.props.fireEventTabFocused,this.fireEventTabSelected,this.props.fireSearchStarted),(t=t||{}).tabSet=r,n=!this.state.tabSet,this.onTabSetChanged&&this.onTabSetChanged(r)),r){var i=this.getSelectedTab(r,e,this.state.tabSet,n);i!==this.state.selectedTab?((t=t||{}).selectedTab=i,t.lastSelectedTab=this.state.selectedTab,i&&i.position(this.props.position),this.onResize&&this.onResize(this.props.size)):this.props.position!==e.position&&this.state.selectedTab&&this.state.selectedTab.position(this.props.position),r.searchTab&&this.props.searchTerm&&(this.props.searchTerm!==e.searchTerm||n)&&(r.searchTab.setQueryText(this.props.searchTerm),r.searchTab.fetch()),this.props.isViewerLive===e.isViewerLive&&this.props.isViewerEnded===e.isViewerEnded||!r.commentsTab||r.commentsTab.toggleBroadcastIsLiveOrEnded(this.props.isViewerLive||this.props.isViewerEnded)}this.props.size!==e.size&&this.onResize&&this.onResize(this.props.size),t&&this.setState(t)},t.prototype.handleStateUpdating=function(e){this.state.selectedTab!==e.selectedTab&&(this.state.lastSelectedTab&&this.state.lastSelectedTab.selected(!1),this.state.selectedTab&&this.state.selectedTab.selected(!0))},t.prototype.getSelectedTab=function(e,t,r,n){var i;return this.props.isExpanded&&(i=e.searchTab&&this.props.searchTerm&&(this.props.searchTerm!==t.searchTerm||n)?e.searchTab:e!==r?e.tabs.indexOf(this.state.selectedTab)>=0?this.state.selectedTab:this.getDefaultSelectedTab(e):this.state.selectedTab&&(this.state.selectedTab!==e.searchTab||this.props.searchTerm)?this.state.selectedTab:this.getDefaultSelectedTab(e)),i},t.prototype.getDefaultSelectedTab=function(e){return this.state.lastSelectedTab||c.chain(e.tabs).filter(function(t){return t!==e.searchTab}).first().value()},t}(a),u=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),f=function(e){function t(){var t=e.call(this)||this;return t.fireSearchStarted=t.fireSearchStarted.bind(t),t.state={playerState:{position:0},viewerState:{isLive:!1,isEnded:!1},eventPaneIsExpanded:!0,eventTabLogic:void 0,eventPaneSize:{width:0,height:0},searchTerm:void 0},t}return u(t,e),t.prototype.render=function(){return i.createElement("div",null,i.createElement(h,{container:this.props.container,eventTabLogic:this.state.eventTabLogic,position:this.state.playerState.position,isViewerLive:this.state.viewerState.isLive,isViewerEnded:this.state.viewerState.isEnded,searchTerm:this.state.searchTerm,isExpanded:this.state.eventPaneIsExpanded,size:this.state.eventPaneSize,fireSearchStarted:this.fireSearchStarted,fireEventTabFocused:this.onEventTabFocused,fireEventTabSelected:this.onEventTabSelected}))},t.prototype.componentDidMount=function(){e.prototype.componentDidMount.call(this),this.props.initialSearchTerm&&this.setState({searchTerm:this.props.initialSearchTerm,eventPaneIsExpanded:!0})},t.prototype.fireSearchStarted=function(e){this.setState({searchTerm:e})},t}(a),l=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),d=function(e){function t(){var t=e.call(this)||this;return t.queryParameters=Panopto.Core.StringHelpers.parseQueryString(window.location.search.slice(1),!0,!1),t}return l(t,e),t.prototype.render=function(){return i.createElement(f,{container:this.props.container,initialSearchTerm:this.queryParameters.query})},t}(a),b=function(){function e(){}return Object.defineProperty(e.prototype,"viewer",{get:function(){return this._viewer},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"eventPane",{get:function(){return this._eventPane},enumerable:!0,configurable:!0}),e.prototype.register=function(e){e instanceof f?this._viewer=e:e instanceof h&&(this._eventPane=e)},e}();Panopto.Viewer.createViewerBridge=function(e){var t=new b;return o.render(i.createElement(d,{container:t}),e[0]),t}}});
//# sourceMappingURL=file://seasyn/tfsbuilds/panopto_core_hohno-7a0-revert-saml_x64/20191031.7/_PublishedWebsites/WebUI/Scripts/Panopto/Bundles/ViewerBridgeFactory.js.map