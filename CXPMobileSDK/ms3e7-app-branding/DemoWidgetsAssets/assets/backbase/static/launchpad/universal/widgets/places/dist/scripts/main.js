!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("base"),require("core"),require("ui"),require("module-places"),require("jquery")):"function"==typeof define&&define.amd?define(["base","core","ui","module-places","jquery"],t):"object"==typeof exports?exports["widget-places"]=t(require("base"),require("core"),require("ui"),require("module-places"),require("jquery")):e["widget-places"]=t(e.base,e.core,e.ui,e["module-places"],e.jquery)}(this,function(e,t,i,o,n){return function(e){function t(o){if(i[o])return i[o].exports;var n=i[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){var o;(function(e){o=function(require,e,t){"use strict";function o(e){}t.name="widget-places";var n=i(1),r=i(2),a=i(3),s=i(4),l=[r.name,a.name,s.name];o.$inject=["lpWidget"],t.exports=n.createModule(t.name,l).controller(i(5)).directive(i(6)).run(o)}.call(t,i,t,e),!(void 0!==o&&(e.exports=o))}).call(t,i(8)(e))},function(t,i,o){t.exports=e},function(e,i,o){e.exports=t},function(e,t,o){e.exports=i},function(e,t,i){e.exports=o},function(e,t,i){var o;o=function(require,e,t){"use strict";e.PlacesCtrl=function(e,t,o,n,r,a,s,l,c,u,d){function p(){e.map.zoom=parseInt(r.getPreference("zoom"),10),n(function(){e.map.center=new s.maps.LatLng(e.latitude,e.longitude)},250)}function f(t){var i=t.message||t.data;e.status.isError=!0,d.captureException(t),e.addAlert(i,"danger",s.alertTimeout)}function m(t){e.filters=l.merge(t.types,t.services).map(function(e){return{id:e.id,label:e.label,selected:!0}})}function g(){var e=c.getInstance({endpoint:l.resolvePortalPlaceholders(r.getPreference("filterDataSrc"))});return e.read().success(m).error(function(){d.throwException(new M("Unable to fetch data."))})}function v(){return l(e.filters).chain().filter({selected:!0}).pluck("id").value()}function h(){e.status.isLoading=!0;var t=l.isUndefined(e.latitude)&&l.isUndefined(e.longitude);d.assert(t===!1,"Missing coordonates."),e.selectedTypes=v();var i=c.getInstance({endpoint:l.resolvePortalPlaceholders(r.getPreference("placesDataSrc"))});return i.read({lat:e.latitude,"long":e.longitude,type:e.selectedTypes.join(","),radius:e.radius}).success(function(t){e.status.isLoading=!1;var i=t.locations||[];i[0]&&l.isString(i[0])&&i[0].indexOf("No")>-1?e.data={locations:[]}:(l.each(i,function(e){var t=l.isPlainObject(e.openingHours)&&l.isUndefined(e.openingHours.periods)===!1;t&&l.map(e.openingHours.periods,function(e){var t=l.date().isoWeekday(parseInt(e.day,10));e.dayShort=t.format("ddd"),e.day=t.format("dddd"),e.time=l.trim(e.time,"-")})}),e.data=i),p()})}function P(e){return S[e]||(S[e]=U.shift()),S[e]}function w(){var i=t.defer(),o=i.promise;return"geolocation"in window.navigator&&r.getPreference("currentPosition")?navigator.geolocation.getCurrentPosition(function(t){e.latitude=t.coords.latitude,e.longitude=t.coords.longitude,i.resolve(e)}):r.getPreference("latitude")&&r.getPreference("longitude")?(e.latitude=r.getPreference("latitude"),e.longitude=r.getPreference("longitude"),i.resolve(e)):d.throwException(new M("Missing Latitude and Longitude.")),o}function x(){r.addEventListener("preferencesSaved",function(){r.refreshHTML()}),e.onZoomChanged=function(t,i){var o=e.options.map.maxZoomOut;t.getZoom()<o&&t.setZoom(o)}}function y(){g().then(w).then(h).then(x)["catch"](f)["finally"](function(){e.status.isLoading=!1})}function b(){var e,o=i(7),n=o(".pac-container .pac-item:first").text(),r=t.defer(),a=r.promise,l=new s.maps.Geocoder;return l.geocode({address:n},function(t,i){return i===s.maps.GeocoderStatus.OK?(e={place:t[0],location:t[0].geometry.location},r.resolve(e),e):void r.reject()}),a}var M=d.createException("PlacesError"),S={},U=l.clone(s.markerColorPool);e.mapId=r.id,e.title=r.getPreference("title"),e.options={map:{maxZoomOut:r.getPreference("maxZoomOut")||0,mapTypeId:s.maps.MapTypeId.ROADMAP,panControl:l.parseBoolean(r.getPreference("panControl")),styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:l.parseBoolean(r.getPreference("showPOI"))?"on":"off"}]}]}},e.status={isLoading:!0,isError:!1,isopen:!1},e.map={},e.map.staticMapApiUrl=r.getPreference("staticMapApiUrl"),e.map.staticMapZoom=r.getPreference("staticMapZoom"),e.map.staticMapThumbSize=r.getPreference("staticMapThumbSize"),e.map.directionApiUrl=r.getPreference("directionApiUrl"),e.radius=r.getPreference("placesFilterRadius")||50,e.viewStatus="",e.sizeRules=[{max:200,size:"tile"},{min:201,max:450,size:"small"},{min:451,size:"normal"}],e.alerts=[],e.selectedTypes=v(),e.$watch("data",function(){l.isUndefined(e.data)||(e.places=e.data,e.redraw())},!0),e.$watch("filters",l.debounce(function(){e.status.isLoading||e.status.isError||h()},800),!0),e.getMarkerOptions=function(e){var t=e.abbr||e.type.label,i=e.icon,o=e[s.titleField];if(t.length>s.maxLengthLabel&&(t=t.charAt(0)),!i){var n=e.color||P(e.type.id);i=s.isCanvasSupported()?a.canvasIcon(t,n):a.googleIcon(t,n),e.icon=i}return{title:o?o+"":"",icon:i}},e.search=function(t){l.isEmpty(t.location)?b().then(function(t){e.latitude=t.location.lat(),e.longitude=t.location.lng(),h().then(function(){e.filters.searchname=t.place.formatted_address})},function(){e.addAlert("The location you provided is not valid!","warning",s.alertTimeout)}):(e.latitude=t.location.lat(),e.longitude=t.location.lng(),h())},e.redraw=function(){e.$broadcast("gmMarkersRedraw","places")},e.addAlert=function(t,i,o){var r={msg:t,type:i||"error"};e.alerts.push(r),o&&n(function(){e.closeAlert(e.alerts.indexOf(r))},o,!1)},e.closeAlert=function(t){t>-1&&e.alerts.splice(t,1)},e.openInfoWindow=function(t,i){e.place=t,e.infoWindow.open(i.getMap(),i)},e.resized=function(t){e.$broadcast("gmMapResize",e.mapId)},e.setView=function(t){var i="col-xs-6",o="col-xs-12",n="hidden";switch(e.viewStatus=t,e.mapClass="",e.listClass="",e.listSize="",e.mapSize="",e.viewStatus){case"map":e.listClass=n,e.mapSize=o;break;case"list":e.mapClass=n,e.listSize=o;break;case"split":e.listSize=i,e.mapSize=i}},u.isOldBrowser()&&n(e.redraw,2e3),e.toggleFilter=function(e,t){e.stopPropagation()},y()},e.PlacesCtrl.$inject=["$scope","$q","$filter","$timeout","lpWidget","lpPlaces","lpPlacesUtils","lpCoreUtils","httpService","angulargmUtils","lpCoreError"]}.call(t,i,t,e),!(void 0!==o&&(e.exports=o))},function(e,t,i){var o;o=function(require,e,t){"use strict";e.placesList=function(e,t,i){return{restrict:"A",replace:!0,scope:{places:"=placesObjects",map:"=mapObject",filters:"=filterObject"},controller:["$scope","$element","angulargmUtils",function(e,i,o){e.isOldBrowser=o.isOldBrowser(),e.css={detailSection:"col-md-6 col-xs-6"},e.openDetails=function(t){(t.showDetails===!1||void 0===t.showDetails)&&(t.showDetails=!0,t.mapUrl=e.map.staticMapApiUrl+"?zoom="+e.map.staticMapZoom+"&size="+e.map.staticMapThumbSize+"&markers=color:red%7C"+t.location.latitude+","+t.location.longitude,t.directionUrl=e.map.directionApiUrl+"?daddr="+t.location.latitude+","+t.location.longitude)},e.closeDetails=function(e,t){t.stopPropagation(),e.showDetails=!1},e.loadMorePlaces=function(){t.publish("launchpad-retail.places.loadMore",{},!0)}}],templateUrl:e.getWidgetBaseUrl(i)+"/templates/placesList.html"}},e.placesList.$inject=["lpCoreUtils","lpCoreBus","lpWidget"]}.call(t,i,t,e),!(void 0!==o&&(e.exports=o))},function(e,t,i){e.exports=n},function(e,t,i){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}])});