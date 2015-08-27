!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("base"),require("core"),require("module-tags"),require("hammerjs")):"function"==typeof define&&define.amd?define(["base","core","module-tags","hammerjs"],e):"object"==typeof exports?exports["module-transactions-2"]=e(require("base"),require("core"),require("module-tags"),require("hammerjs")):t["module-transactions-2"]=e(t.base,t.core,t["module-tags"],t.hammerjs)}(this,function(t,e,r,o){return function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){var o;(function(t){o=function(require,t,e){"use strict";e.name="module-transactions-2";var o=r(1),n=r(2),a=r(3),i=r(6),s=r(7),c=r(8),l=[n.name,a.name,i.name,s.name,c.name];e.exports=o.createModule(e.name,l).provider(r(4)).directive(r(5))}.call(e,r,e,t),!(void 0!==o&&(t.exports=o))}).call(e,r(9)(t))},function(e,r,o){e.exports=t},function(t,r,o){t.exports=e},function(t,e,o){t.exports=r},function(t,e,r){var o;o=function(require,t,e){"use strict";t.lpTransactions=function(){this.$get=function(t,e,r,o,n){function a(){var a=function(){this.from=i.from,this.sort=i.sort,this.transactions=[],this.moreAvailable=!0,this.account=null,this.errorCode=null};return a.prototype.availableFilters={QUERY:"query",FROM_DATE:"fromDate",TO_DATE:"toDate",FROM_AMOUNT:"fromAmount",TO_AMOUNT:"toAmount",CONTACT:"contact",CATEGORY:"category",DEBITCREDIT:"bk"},a.prototype.clearTransactionsList=function(){return this.transactions=[],this.moreAvailable=!0,this.from=i.from,this},a.prototype.setFilters=function(t){return n?(n.setFilter(t),this.filters=n.getFilters()):this.filters=t,this},a.prototype.clearFilters=function(){return this.filters=n?n.clearFilters():{},this},a.prototype.updateFilters=function(){return this.filters=n?n.getFilters():{},this},a.prototype.preprocessTransactions=function(t){return t&&(t=r.map(t,function(e,r){var o=new Date(t[r-1]?t[r-1].bookingDateTime:(new Date).getTime()+864e5),n=new Date(e.bookingDateTime);return e.newDate=o.getDate()!==n.getDate()||o.getMonth()!==n.getMonth()||o.getFullYear()!==n.getFullYear(),e.details||(e.details=null),e.detailTabs={details:!0,categories:!1},"DBIT"===e.creditDebitIndicator&&(e.transactionAmount*=-1),e})),t},a.prototype.loadMoreTransactions=function(){var r=this,n=this.availableFilters,a=e.defer();this.account||o.throwException(new Error("No account specified"));var s={f:this.from,l:i.pageSize};return this.loading=!0,this.filters&&(this.filters.query&&(s.a="search",s.q=this.filters[n.QUERY]),this.filters[n.FROM_DATE]&&this.filters[n.TO_DATE]&&(s.df=this.filters[n.FROM_DATE],s.dt=this.filters[n.TO_DATE]),this.filters[n.FROM_AMOUNT]&&this.filters[n.TO_AMOUNT]&&(s.af=this.filters[n.FROM_AMOUNT],s.at=this.filters[n.TO_AMOUNT]),this.filters[n.CONTACT]&&(s.ca=this.filters[n.CONTACT]),this.filters[n.CATEGORY]&&(s.categoryIds=this.filters[n.CATEGORY]),this.filters[n.DEBITCREDIT]&&(s.bk=this.filters[n.DEBITCREDIT])),s.sort=this.sort,t.get(i.transactionsEndpoint,{data:{accountId:this.account.id},params:s}).success(function(t){(null===t||"null"===t)&&(t=[]),r.from=r.from+i.pageSize;var e=r.preprocessTransactions(t);e&&e.length<i.pageSize&&(r.moreAvailable=!1),r.transactions.length=s.f-1,r.transactions=r.transactions.concat(e),a.resolve(r.transactions)}).error(function(t){r.errorCode=t.errorCode||500})["finally"](function(){r.loading=!1}),a.promise},a.prototype.loadTransactions=function(t){return this.clearTransactionsList(),this.account=t,this.loadMoreTransactions()},a.prototype.preprocessTransactionDetails=function(t,e){var o=[],n=[],a=["location"],i=["address","merchantType","bookingDateTime"],s=["transactionId"];if(t){if(r.isObject(t.location)){var c=t.location.latitude+","+t.location.longitude,l=["size=160x90","center="+c,"zoom=12","format=jpg","sensor="+!1,"markers="+encodeURIComponent("size:med|color:red|")+c];t.location.mapUrl="http://maps.googleapis.com/maps/api/staticmap?"+l.join("&")}t.bookingDateTime=e.bookingDateTime;for(var u in t)if(t.hasOwnProperty(u)&&a.indexOf(u)<0){var d={name:u,value:t[u],longValue:s.indexOf(u)>-1};i.indexOf(u)>-1?o.push(d):n.push(d)}t.special=o,t.custom=n}return t},a.prototype.loadTransactionDetails=function(e){var o=this;return!e.details||r.isEmpty(e.details)?(e.loading=!0,t.get(i.transactionDetailsEndpoint,{params:{transactionId:e.id,accountId:this.account.id}}).success(function(t){e.details=o.preprocessTransactionDetails(t,e)}).error(function(t){e.errorCode=t.errorCode||500})["finally"](function(){e.loading=!1})):void 0},a.prototype.updateTransactionCategory=function(e,r){return t.put(i.transactionsEndpoint+"/"+e.id,{accountId:this.account.id,categoryId:r}).success(function(t){e.categoryId=r}).error(function(t){e.errorCode=t.errorCode||500})},a.prototype.updateSimilarTransactionCategory=function(e,r){return t.put(i.transactionsEndpoint,{accountId:this.account.id,id:e.id,condition:"SIMILAR",categoryId:r}).success(function(t){e.categoryId=r}).error(function(t){e.errorCode=t.errorCode||500})},a.prototype.allowMoreResults=function(){var t=!this.loading&&this.moreAvailable&&!this.errorCode;return t},a.prototype.noTransactionsFound=function(){var t=!this.loading&&0===this.transactions.length&&!this.errorCode;return t},a.prototype.isSearching=function(){if(this.filters)for(var t in this.filters)if(this.filters.hasOwnProperty(t))return!0;return!1},new a}var i={transactionsEndpoint:"/mock/v1/current-accounts/$(accountId)/transactions",transactionDetailsEndpoint:"/mock/v1/current-accounts/transaction/$(transactionId)/details",pageSize:20,from:1,sort:"-bookingDateTime"};return{setConfig:function(t){return i=r(t).chain().mapValues(r.resolvePortalPlaceholders).defaults(i).value(),this},getConfig:function(t){return t&&r.isString(t)?i[t]:i},api:a}},this.$get.$inject=["$http","$q","lpCoreUtils","lpCoreError","lpTagsUtils"]}}.call(e,r,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,r){var o;o=function(require,t,e){"use strict";t.lpBalanceUpdate=function(){return{restrict:"A",require:"ngModel",link:function(t,e,r,o){e.addClass("lp-amount"),t.$watch(function(){return o.$modelValue},function(t,r){if(t.id===r.id){var o={increase:"lp-increase-amount",decrease:"lp-decrease-amount"},n=2e3;1===t.delta?(e.addClass(o.increase),setTimeout(function(){e.removeClass(o.increase)},n)):-1===t.delta&&(e.addClass(o.decrease),setTimeout(function(){e.removeClass(o.decrease)},n)),t.delta=0}})}}}}.call(e,r,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,r){var o;(function(t){o=function(require,t,e){"use strict";e.name="component.transactions-categories";var o=r(1),n=r(2),a=[n.name];e.exports=o.createModule(e.name,a).provider(r(11)).directive(r(12)).filter(r(13))}.call(e,r,e,t),!(void 0!==o&&(t.exports=o))}).call(e,r(9)(t))},function(t,e,r){var o;(function(t){o=function(require,t,e){"use strict";e.name="component.transactions-p2p";var o=r(1),n=r(2),a=[n.name];e.exports=o.createModule(e.name,a).provider(r(10))}.call(e,r,e,t),!(void 0!==o&&(t.exports=o))}).call(e,r(9)(t))},function(t,e,r){var o;(function(t){o=function(require,t,e){"use strict";e.name="component.transactions-currency";var o=r(1),n=r(2),a=[n.name];e.exports=o.createModule(e.name,a).provider(r(14))}.call(e,r,e,t),!(void 0!==o&&(t.exports=o))}).call(e,r(9)(t))},function(t,e,r){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e,r){var o;o=function(require,t,e){"use strict";t.lpP2PTransactions=function(t){this.$get=function(e,r){function o(){var o=function(){this.transactions=[],this.from=n.from,this.moreAvailable=!0,this.accountsArray=[],this.errorCode=null};return o.prototype.clearTransactionsList=function(){this.transactions=[],this.moreAvailable=!0,this.from=n.from},o.prototype.loadTransactions=function(t){return this.clearTransactionsList(),this.accountsArray=t,this.loadMoreTransactions()},o.prototype.loadTransactions=function(t){return this.clearTransactionsList(),this.accountsArray=t,this.loadMoreTransactions()},o.prototype.loadMoreTransactions=function(){var t=this,o=r.defer();this.loading=!0;var a={accountIds:this.accountsArray.join(","),offset:this.from,limit:n.pageSize};return e.get(n.transactionsEndpoint,{params:a}).success(function(e){t.from+=n.pageSize;var r=t.preprocessTransactions(e);r&&r.length<n.pageSize&&(t.moreAvailable=!1),t.transactions=t.transactions.concat(r),o.resolve(t.transactions)}).error(function(e){t.errorCode=e.errorCode||500})["finally"](function(){t.loading=!1}),o.promise},o.prototype.preprocessTransactions=function(e){var r=[];return e&&e.length>0&&(r=t.map(e,function(t,r){var o=new Date(t.initiationDateTime);if(t.showDate=!0,r>0){var n=new Date(e[r-1].initiationDateTime);t.showDate=n.getDate()!==o.getDate()||n.getMonth()!==o.getMonth()||n.getFullYear()!==o.getFullYear()}return t.requiresUserAction=!1,"CREDIT"===t.creditDebitIndicator&&"PENDING"===t.status&&(t.requiresUserAction=!0),t})),r},o.prototype.allowMoreResults=function(){return!this.loading&&this.moreAvailable&&!this.errorCode},o.prototype.noTransactionsFound=function(){return!this.loading&&0===this.transactions.length&&!this.errorCode},new o}var n={transactionsEndpoint:"/mock/v1/p2p-payments",pageSize:20,from:1};return{setConfig:function(e){return n=t(e).chain().mapValues(t.resolvePortalPlaceholders).defaults(n).value(),this},getConfig:function(e){return e&&t.isString(e)?n[e]:n},api:o}}},t.lpP2PTransactions.$inject=["lpCoreUtils"]}.call(e,r,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,r){var o;o=function(require,t,e){"use strict";t.lpTransactionsCategory=function(t){var e={generic:"Generic error",badId:"The id must be a string"};this.$get=function(r,o,n){function a(){function a(){this.categories=[]}return a.prototype.getAll=function(){var a=o.defer(),s=this;return r.get(i.endpoint).success(function(r,o,i,c){t.isArray(r)?(s.categories=r,a.resolve(r)):n.throwException(new Error(e.generic))}).error(function(t,r,o,a){n.throwException(new Error(e.generic))}),a.promise},a.prototype.getById=function(a){t.isString(a)||n.throwException(new TypeError(e.badId));var s=o.defer();return r.get(i.endpoint+"/"+a).success(function(t,e,r,o){s.resolve(t)}).error(function(t,r,o,a){n.throwException(new Error(e.generic))}),s.promise},a.prototype.create=function(a){var s=o.defer();return t.isObject(a)&&a.name&&a.color||n.throwException(new Error("Bad category data: "+a)),r.post(i.endpoint,a).success(function(t,e,r,o){s.resolve(t)}).error(function(t,r,o,a){n.throwException(new Error(e.generic))}),s.promise},a.prototype.removeById=function(a){t.isString(a)||n.throwException(new TypeError(e.badId));var s=o.defer();return r["delete"](i.endpoint+"/"+a).success(function(t,e,r,o){s.resolve(t)}).error(function(t,r,o,a){n.throwException(new Error(e.generic))}),s.promise},new a}var i={endpoint:""};return{setConfig:function(e){return i=t(e).chain().mapValues(t.resolvePortalPlaceholders).defaults(i).value(),this},api:a}},this.$get.$inject=["$http","$q","lpCoreError"]},t.lpTransactionsCategory.$inject=["lpCoreUtils"]}.call(e,r,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,r){var o;o=function(require,t,e){"use strict";function o(){var t,e,r=arguments[0]/255,o=arguments[1]/255,n=arguments[2]/255,a=Math.max(r,o,n),i=Math.min(r,o,n),s=(a+i)/2;if(a===i)t=e=0;else{var c=a-i;switch(e=s>.5?c/(2-a-i):c/(a+i),a){case r:t=(o-n)/c+(n>o?6:0);break;case o:t=(n-r)/c+2;break;case n:t=(r-o)/c+4}t/=6}return{h:Math.round(360*t),s:Math.round(100*e),l:Math.round(100*s)}}var n=r(15),a=window.jQuery;t.lpCategoryDisplay=function(t,e){return t.put("$categoryDisplay.html",'<div class="lp-transaction-category" ng-click="categoryClick($event, transaction)"><span class="category-marker" ng-style="markerStyle"></span><div class="category-name"><span class="h4">{{category.name}}</span></div></div>'),{restrict:"A",replace:!0,require:"ngModel",scope:{isCategoryView:"=lpCategoryView",categoryList:"=lpCategoryList",transaction:"=ngModel",categoryClick:"="},template:t.get("$categoryDisplay.html"),link:function(t,r,o){var a=r.parent().parent(),i=0;t.markerStyle={},t.category=null;var s={},c=a.data("touch"),l=function(t){t.srcEvent.stopPropagation(),t.preventDefault(),r.parent().addClass("no-animation");var e=i+Math.floor(t.deltaX);e>160&&(e=160),e>i&&r.parent().css("width",e+"px")},u=function(t){t.srcEvent.stopPropagation(),t.preventDefault(),i=parseInt(r.css("width"),10)},d=function(e){e.srcEvent.stopPropagation(),e.preventDefault(),r.parent().removeClass("no-animation");var o=i+Math.floor(e.deltaX);o>160&&(o=160),o>150&&t.categoryClick&&"function"==typeof t.categoryClick&&t.categoryClick.apply(this,[null,t.transaction]),r.parent().css("width","")};t.isCategoryView||"undefined"==typeof n||(c||(c=new n(a[0]),a.data("touch",c)),s.panright=c.on("panright",l),s.panstart=c.on("panstart",u),s.panend=c.on("panend",d)),t.$on("$destroy",function(){Object.keys(s).forEach(function(t){var e=s[t];e.off(t,e.handlers[t][0])})}),t.$watch("transaction.categoryId",function(e){t.setCategory(e)}),t.setCategory=function(e){if(t.categoryList)for(var r=0;r<t.categoryList.length;r++)t.categoryList[r].id===e&&(t.category=t.categoryList[r]);t.category&&e?t.markerStyle.backgroundColor=t.category.color:t.transaction.categoryId="00cc9919-ba0c-4702-917b-1fba4c256b4d"},e.subscribe("launchpad-retail.categoryDelete",function(e){e.id===t.transaction.categoryId&&t.setCategory()})}}},t.lpCategoryDisplay.$inject=["$templateCache","lpCoreBus"],t.lpCategoryItem=function(){return{restrict:"A",replace:!0,template:'<div class="category-item btn btn-block btn-default" tabIndex="{{category.id !== transaction.categoryId ? 0 : -1}}" ng-style="{\'background-color\': category.id === newCategoryId ? category.color : \'#ffffff\'}" ng-click="markNewCategory(category.id)" ng-keydown="categoryKeyDown($event, category)"><div class="marker" ng-style="{\'background-color\':category.color}"></div><span class="name" ng-class="{ light: (category.id === newCategoryId && getTextColor(category.color)) }">{{category.name}}</span><button type="button" class="close" aria-hidden="true" ng-click="deleteCategory($event, category)" ng-if="category.type ===\'NORMAL\'">&times;</button></div>'}},t.lpCategorySelect=function(t,e,r,n){return t.put("$categorySelect.html",'<div class="lp-category-select clearfix"><div class="clearfix"><label class="control-label pull-left" lp-i18n="Current Category:"></label><div ng-repeat="category in transactionCategories | orderBy:\'-priority\' | selectedCategory:this" class="col-xs-6 col-sm-4 col-md-4"><div lp-category-item="lp-category-item"></div></div></div><label class="control-label pull-left" lp-i18n="Change category to:"></label><form class="form category-search clearfix" role="form" ng-submit="createCategory()"><input type="text" ng-model="categoryFilter" class="form-control" placeholder="{{\'Search categories / Create category\'|translate}}" maxlength="40" ng-disabled="showColorPicker" /></form><div class="category-list col-xs-12 col-sm-12 col-md-9"><div class="new-category col-xs-12 col-sm-12 col-md-12" ng-if="!categoryExists() && !showColorPicker && categoryFilter.length > 0"><label class="control-label pull-left" lp-i18n="Create new category:"></label><div ng-repeat="category in newCategory" class="col-xs-6 col-sm-6 col-md-6"><div lp-category-item="lp-category-item"></div></div></div><ul class="category-list col-xs-12 col-sm-12 col-md-12"><li ng-repeat="category in transactionCategories | orderBy:\'-priority\' | categoryList:this" class="col-xs-6 col-sm-4 col-md-4" ng-show="!showColorPicker"><div lp-category-item="lp-category-item"></div></li><div id="{{\'transaction-\' + transaction.id + \'-category-step-2\'}}" class="clearfix" ng-if="showColorPicker"><label class="clearfix" lp-i18n="Choose a color for the new category:"></label><div lp-color-picker="lp-color-picker" select-color="selectColor"></div></div></ul></div><div id="{{\'transaction-\' + transaction.id + \'-category-step-3\'}}" class="col-xs-12 col-sm-12 col-md-3 category-apply" ng-if="(smallLayout && newCategoryId.length) || !smallLayout"><div class="row" ng-if="smallLayout"><div class="col-xs-12 col-sm-12 clearfix"><label class="control-label pull-left" lp-i18n="You\'ve selected:"></label><div ng-repeat="category in transactionCategories | orderBy:\'-priority\' | markedCategory:this" class="col-xs-7 col-sm-6 col-md-4"><div lp-category-item="lp-category-item"></div></div></div><div class="col-xs-12 col-sm-12 clearfix"><p lp-i18n="Would you like to change the category for only this transaction or all similar transactions?"></p></div></div><div class="row"><div class="col-sm-12 col-md-12" ng-if="!smallLayout"><p lp-i18n="Apply category change to?"></p></div><div class="col-xs-6 col-sm-6 col-md-12"><button type="button" class="btn btn-default btn-block" ng-click="changeCategory(newCategoryId)" ng-disabled="!newCategoryId.length" lp-i18n="Only This"></button></div><div class="col-xs-6 col-sm-6 col-md-12"><button type="button" class="btn btn-default btn-block" ng-click="changeCategory(newCategoryId, true)" ng-disabled="!newCategoryId.length" lp-i18n="All Similar"></button></div></div></div></div>'),{restrict:"A",replace:!1,require:"ngModel",scope:{model:"=ngModel",transaction:"=",update:"=",smallLayout:"=",offsetTopCorrection:"="},template:t.get("$categorySelect.html"),link:function(t,i,s){t.showColorPicker=!1,t.searchResultNumber=t.model.categories.length;var c=function(){t.transactionCategories=[];for(var e=0;e<t.model.categories.length;e++)t.transactionCategories.push(n.cloneDeep(t.model.categories[e]))};c();var l=function(r){t.smallLayout&&e(function(){a("body").animate({scrollTop:a("#transaction-"+t.transaction.id+(r>1?"-category-step-"+r:"")).offset().top-5-t.offsetTopCorrection},500)},0)},u=function(){e(function(){a(i).find('button[ng-click^="changeCategory"]')[0].focus()},0)};t.$watch("categoryFilter",function(e){t.newCategory=[{id:null,name:e,color:"#cccccc"}]}),t.categoryExists=function(){var e=!1;if(t.categoryFilter&&t.categoryFilter.length>0)for(var r=0;r<t.model.categories.length;r++)t.categoryFilter.toLowerCase()===t.model.categories[r].name.toLowerCase()&&(e=!0);return e},t.getTextColor=function(t){var e=!0,r=t.substr(1,2),n=t.substr(3,2),a=t.substr(5,2);return 4===t.length&&(r=t.substr(1,1)+t.substr(1,1),n=t.substr(2,1)+t.substr(2,1),a=t.substr(3,1)+t.substr(3,1)),r=parseInt(r,16),n=parseInt(n,16),a=parseInt(a,16),o(r,n,a).l>45&&(e=!1),e},t.newCategoryId="",t.markNewCategory=function(e){if(null===e)return void t.createCategory();if(t.transaction.categoryId!==e){if(t.newCategoryId===e)return void(t.newCategoryId="");t.newCategoryId=e,l(3),u()}},t.categoryKeyDown=function(e,r){if(13===e.which||32===e.which){if(e.preventDefault(),e.stopPropagation(),"button"===e.target.tagName.toLowerCase())return void t.deleteCategory(e,r);t.markNewCategory(r.id)}},t.createCategory=function(){var r=!t.categoryExists()&&t.categoryFilter.length>0;r?(t.showColorPicker=!0,l(2)):t.searchResultNumber&&e(function(){a(".category-list .category-item")[0].focus()},0)},t.selectColor=function(e){t.model.create({name:t.categoryFilter,color:e}).then(function(e){t.categoryFilter="",t.showColorPicker=!1,c(),t.markNewCategory(e.id),r.publish("launchpad-retail.categoryListUpdate",null,!0),l(3),u()},function(e){r.publish("launchpad.add-notification",{notification:{id:"category-create-duplicate",level:"SEVERE",message:e.data.error,closable:!0}},!0),t.categoryFilter="",t.showColorPicker=!1})},t.deleteCategory=function(e,o){e.stopPropagation(),"NORMAL"===o.type&&t.model.removeById(o.id).then(function(){t.newCategoryId===o.id&&(t.newCategoryId=""),c(),r.publish("launchpad-retail.categoryDelete",{id:o.id},!0),r.publish("launchpad-retail.categoryListUpdate",null,!0)})},t.changeCategory=function(r,o){t.newCategoryId="",t.categoryFilter="",t.update(t.transaction,r,o),e(function(){t.transaction.showDetails=!1},100),l(1),a("#transaction-"+t.transaction.id)[0].focus()},r.subscribe("launchpad-retail.categoryListUpdate",function(){c()})}}},t.lpCategorySelect.$inject=["$templateCache","$timeout","lpCoreBus","lpCoreUtils"]}.call(e,r,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,r){var o;o=function(require,t,e){"use strict";t.categoryList=function(){return function(t,e){var r=t;e.initialSelected||(e.initialSelected=e.transaction.categoryId);for(var o=0;o<r.length;o++)"TEMPORARY"!==r[o].type?(r[o].priority=1,"CONTROL"===r[o].type&&(r[o].priority=0),r[o].id===e.initialSelected&&(r[o].priority=2)):(r.splice(o,1),o--);for(o=0;o<r.length;o++)e.categoryFilter&&e.categoryFilter.length&&-1===r[o].name.toLowerCase().indexOf(e.categoryFilter.toLowerCase())?(r.splice(o,1),o--):r[o].id===e.transaction.categoryId&&(r.splice(o,1),o--);return e.searchResultNumber=r.length,r}},t.selectedCategory=function(){return function(t,e){for(var r=t,o=0;o<r.length;o++)r[o].id!==e.transaction.categoryId&&(r.splice(o,1),o--);return r}},t.markedCategory=function(){return function(t,e){for(var r=t,o=0;o<r.length;o++)r[o].id!==e.newCategoryId&&(r.splice(o,1),o--);return r}}}.call(e,r,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,r){var o;o=function(require,t,e){"use strict";t.lpTransactionsCurrency=function(t){this.$get=function(e,r){function o(){var o=function(){this.groups={defaultCurrency:"aDefault",preferredCurrencies:"bPreferred",rest:"cOther"},this.orderedCurrencies=[]};return o.prototype.loadDefaultCurrency=function(){var t=this,o=r.defer();return e.get(n.defaultCurrencyEndpoint).success(function(t){o.resolve(t)}).error(function(){t.error="currencyServiceError"}),o.promise},o.prototype.configureDefaultCurrency=function(t){var e={currency_code:t.currency_code,exchange_rate:1,group:this.groups.defaultCurrency};this.defaultCurrency=e,this.selected=this.defaultCurrency,this.orderedCurrencies.push(this.defaultCurrency)},o.prototype.loadOtherCurrencies=function(){var t=this,o=r.defer();return e.get(n.currencyListEndpoint,{params:{currency:this.defaultCurrency.currency_code}}).success(function(e){e&&t.sortCurrencies(e),o.resolve(e)}).error(function(){t.error="currencyServiceError"}),o.promise},o.prototype.sortCurrencies=function(t){for(var e=0;e<t.preferred.length;e++)t.preferred[e].group=this.groups.preferredCurrencies;if(this.orderedCurrencies.push.apply(this.orderedCurrencies,t.preferred),!n.disableExtraCurrencies){for(var r=0;r<t.rest.length;r++)t.rest[r].group=this.groups.rest;t.rest.sort(function(t,e){var r=t.currency_code.toLowerCase(),o=e.currency_code.toLowerCase();return o>r?-1:r>o?1:0}),this.orderedCurrencies.push.apply(this.orderedCurrencies,t.rest)}},o.prototype.findCurrency=function(e){return t.find(this.orderedCurrencies,function(t){return t.currency_code===e})},o.prototype.selectCurrency=function(t){this.selected=this.findCurrency(t)},new o}var n={defaultCurrencyEndpoint:"/mock/v1/currency-rates/default",currencyListEndpoint:"/mock/v1/currency-rates",disableExtraCurrencies:!1};return{setConfig:function(e){return n=t(e).chain().mapValues(t.resolvePortalPlaceholders).defaults(n).value(),this},getConfig:function(e){return e&&t.isString(e)?n[e]:n},api:o}}},t.lpTransactionsCurrency.$inject=["lpCoreUtils"]}.call(e,r,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,r){t.exports=o}])});