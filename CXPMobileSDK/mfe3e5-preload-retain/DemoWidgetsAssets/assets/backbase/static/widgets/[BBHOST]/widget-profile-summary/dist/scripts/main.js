!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("base"),require("core"),require("ui"),require("module-users")):"function"==typeof define&&define.amd?define(["base","core","ui","module-users"],o):"object"==typeof exports?exports["widget-profile-summary"]=o(require("base"),require("core"),require("ui"),require("module-users")):e["widget-profile-summary"]=o(e.base,e.core,e.ui,e["module-users"])}(this,function(e,o,t,i){return function(e){function o(i){if(t[i])return t[i].exports;var n=t[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o,t){var i;(function(e){i=function(require,e,o){"use strict";function i(e){e.publish("launchpad-retail.behaviour",{tag:"signedin"})}o.name="widget-profile-summary";var n=t(2),r=t(3),a=t(4),l=t(5),s=t(6),u=[r.name,a.name,l.name,s.name];i.$inject=["lpCoreBus"],o.exports=n.createModule(o.name,u).controller(t(8)).run(i)}.call(o,t,o,e),!(void 0!==i&&(e.exports=i))}).call(o,t(1)(e))},function(e,o){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(o,t){o.exports=e},function(e,t){e.exports=o},function(e,o){e.exports=t},function(e,o){e.exports=i},function(e,o,t){var i;(function(e){i=function(require,e,o){"use strict";o.name="widget-profile-summary.component.last-login";var i=t(2),n=t(3),r=[n.name];o.exports=i.createModule(o.name,r).directive(t(7))}.call(o,t,o,e),!(void 0!==i&&(e.exports=i))}).call(o,t(1)(e))},function(e,o,t){var i;i=function(require,e,o){"use strict";e.lpLastLogin=function(e,o,t){function i(){return r}function n(o,i,n){var r;o.show=!0,r=o.$watch("lastLoginDateTime",function(i){if(i){var n=parseInt(o.hideAfter,10);!t.isNaN(n)&&n>0&&e(function(){o.show=!1},1e3*n),r()}})}var r=['<div class="lp-last-login" ng-show="show && lastLoginDateTime">','    <span class="lp-last-login__label" lp-i18n="Last login:"></span> <span class="lp-last-login__datetime">{{lastLoginDateTime | date:\'MMMM d hh:mma\'}}</span>',"</div>"].join("");return{restrict:"AE",scope:{lastLoginDateTime:"=lpLastLogin",hideAfter:"="},link:n,template:i}},e.lpLastLogin.$inject=["$timeout","$parse","lpCoreUtils"]}.call(o,t,o,e),!(void 0!==i&&(e.exports=i))},function(e,o,t){var i;i=function(require,e,o){"use strict";e.profileSummaryController=function(e,o,t,i,n,r,a){var l=a,s=r;e.model={username:"Admin"},e.lastLoginDateTimeShow=s.parseBoolean(o.getResolvedPreference("lastLoginDateTimeShow")),e.lastLoginDateTimeHideAfter=o.getResolvedPreference("lastLoginDateTimeHideAfter");var u=o.getResolvedPreference("profileLink");e.profileLink=u||null;var c=t.userId||"Anonymous";s.extend(e.model,{username:c}),n.get().then(function(o){var t=o.data;e.model.preferredName=t.preferredName||s.capitalize(e.model.username),e.model.photo=t.photoData||(t.photoUrl?decodeURIComponent(t.photoUrl):null),e.model.lastLoginDateTime=t.lastLoginDateTime})["catch"](function(){e.model.preferredName=s.capitalize(e.model.username)}),e.logout=function(){i.logOut()},e.responsiveRules=[{min:0,max:110,size:"xs"},{min:101,size:"small"},{min:201,size:"medium"}],e.onSizeChange=function(o){e.responsive=o},e.viewProfile=function(){l.publish("launchpad-retail.viewProfile",{originType:"profileSummary"},!0)}},e.profileSummaryController.$inject=["$scope","lpWidget","lpPortal","lpUsersAuthentication","PreferenceService","lpCoreUtils","lpCoreBus"]}.call(o,t,o,e),!(void 0!==i&&(e.exports=i))}])});