!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("base"),require("ui"),require("core"),require("module-accounts")):"function"==typeof define&&define.amd?define(["base","ui","core","module-accounts"],o):"object"==typeof exports?exports["widget-card-loyalty"]=o(require("base"),require("ui"),require("core"),require("module-accounts")):e["widget-card-loyalty"]=o(e.base,e.ui,e.core,e["module-accounts"])}(this,function(e,o,t,r){return function(e){function o(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o,t){var r;(function(e){r=function(require,e,o){"use strict";function r(){}o.name="widget-card-loyality";var n=t(1),c=t(2),a=t(3),i=t(4),u=[a.name,c.name,i.name];o.exports=n.createModule(o.name,u).controller(t(5)).run(r)}.call(o,t,o,e),!(void 0!==r&&(e.exports=r))}).call(o,t(6)(e))},function(o,t,r){o.exports=e},function(e,t,r){e.exports=o},function(e,o,r){e.exports=t},function(e,o,t){e.exports=r},function(e,o,t){var r;r=function(require,e,o){"use strict";e.cardLoyaltyController=function(e,o,t,r){var n=r,c=function(o){e.cardsModel.loadCardLoyaltyDetails(o)},a=function(){e.cardsModel=t.getInstance({cardsEndpoint:o.getPreference("cardDataSrc")}),n.subscribe("launchpad-retail.cardSelected",function(e){var o=e.account;o&&o.id&&c(o.id)})};a()},e.cardLoyaltyController.$inject=["$scope","lpWidget","CardsModel","lpCoreBus"]}.call(o,t,o,e),!(void 0!==r&&(e.exports=r))},function(e,o,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}])});