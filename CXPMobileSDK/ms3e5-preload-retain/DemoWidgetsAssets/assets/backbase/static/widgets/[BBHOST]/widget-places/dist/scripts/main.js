!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("base"),require("core"),require("ui"),require("module-places"),require("jquery")):"function"==typeof define&&define.amd?define(["base","core","ui","module-places","jquery"],t):"object"==typeof exports?exports["widget-places"]=t(require("base"),require("core"),require("ui"),require("module-places"),require("jquery")):e["widget-places"]=t(e.base,e.core,e.ui,e["module-places"],e.jquery)}(this,function(e,t,i,r,o){return function(e){function t(r){if(i[r])return i[r].exports;var o=i[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){var r;(function(e){r=function(require,e,t){"use strict";function r(e,t){e.publish("cxp.item.loaded",{id:t.model.name})}t.name="widget-places";var o=i(2),a=i(3),n=i(4),s=i(5),l=[a.name,n.name,s.name];r.$inject=["lpCoreBus","lpWidget"],t.exports=o.createModule(t.name,l).controller(i(6)).directive(i(8)).run(r)}.call(t,i,t,e),!(void 0!==r&&(e.exports=r))}).call(t,i(1)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(t,i){t.exports=e},function(e,i){e.exports=t},function(e,t){e.exports=i},function(e,t){e.exports=r},function(e,t,i){var r;r=function(require,e,t){"use strict";e.PlacesCtrl=function(e,t,r,o,a,n,s,l,c,d,u,p){function f(){e.map.zoom=parseInt(a.getPreference("zoom"),10),o(function(){e.map.center=new s.maps.LatLng(e.latitude,e.longitude)},250)}function m(e){if(l.isString(e.message)&&l.trim(e.message))return e.message;if(e.data){if(l.isArray(e.data.errors)&&e.data.errors.length)return l(e.data.errors).pluck("message").join("<br />");if(l.isString(e.data)&&l.trim(e.data))return e.data}return"Unknown server error ocurred"}function g(t){var i=m(t);e.status.isError=!0,u.captureException(t),e.addAlert(i,"danger",s.alertTimeout)}function v(t){e.filters=l.merge(t.types,t.services).map(function(e){return{id:e.id,label:e.label,selected:!0}})}function h(){var e=c.getInstance({endpoint:l.resolvePortalPlaceholders(a.getPreference("filterDataSrc"))});return e.read().success(v).error(function(){u.throwException(new M("Unable to fetch data."))})}function P(){return l(e.filters).chain().filter({selected:!0}).pluck("id").value()}function w(){e.status.isLoading=!0;var t=l.isUndefined(e.latitude)&&l.isUndefined(e.longitude);u.assert(t===!1,"Missing coordonates."),e.selectedTypes=P();var i=c.getInstance({endpoint:l.resolvePortalPlaceholders(a.getPreference("placesDataSrc"))});return i.read({lat:e.latitude,"long":e.longitude,type:e.selectedTypes.join(","),radius:e.radius}).success(function(t){e.status.isLoading=!1;var i=t.locations||[];i[0]&&l.isString(i[0])&&i[0].indexOf("No")>-1?e.data={locations:[]}:(l.each(i,function(e){var t=l.isPlainObject(e.openingHours)&&l.isUndefined(e.openingHours.periods)===!1;t&&l.map(e.openingHours.periods,function(e){var t=l.date().isoWeekday(parseInt(e.day,10));e.dayShort=t.format("ddd"),e.day=t.format("dddd"),e.time=l.trim(e.time,"-")})}),e.data=i),f()})}function x(e){return z[e]||(z[e]=C.shift()),z[e]}function y(){var i=t.defer(),r=i.promise;return"geolocation"in window.navigator&&a.getPreference("currentPosition")?navigator.geolocation.getCurrentPosition(function(t){e.latitude=t.coords.latitude,e.longitude=t.coords.longitude,i.resolve(e)}):a.getPreference("latitude")&&a.getPreference("longitude")?(e.latitude=a.getPreference("latitude"),e.longitude=a.getPreference("longitude"),i.resolve(e)):u.throwException(new M("Missing Latitude and Longitude.")),r}function b(){a.addEventListener("preferencesSaved",function(){a.refreshHTML()}),e.onZoomChanged=function(t,i){var r=e.options.map.maxZoomOut;t.getZoom()<r&&t.setZoom(r)}}function S(){h().then(y).then(w).then(b)["catch"](g)["finally"](function(){e.status.isLoading=!1})}function U(){var e,r=i(7),o=r(".pac-container .pac-item:first").text()||r("input.filters-name").val(),a=t.defer(),n=a.promise,l=new s.maps.Geocoder;return l.geocode({address:o},function(t,i){return i===s.maps.GeocoderStatus.OK?(e={place:t[0],location:t[0].geometry.location},a.resolve(e),e):void a.reject()}),n}var M=u.createException("PlacesError"),z={},C=l.clone(s.markerColorPool);e.sticky=l.parseBoolean(a.getPreference("sticky")),e.mapId=a.id,e.title=a.getPreference("title"),e.options={map:{maxZoomOut:a.getPreference("maxZoomOut")||0,mapTypeId:s.maps.MapTypeId.ROADMAP,panControl:l.parseBoolean(a.getPreference("panControl")),styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:l.parseBoolean(a.getPreference("showPOI"))?"on":"off"}]}]}},e.status={isLoading:!0,isError:!1,isopen:!1},e.map={},e.map.staticMapApiUrl=a.getPreference("staticMapApiUrl"),e.map.staticMapZoom=a.getPreference("staticMapZoom"),e.map.staticMapThumbSize=a.getPreference("staticMapThumbSize"),e.map.directionApiUrl=a.getPreference("directionApiUrl"),e.radius=a.getPreference("placesFilterRadius")||50,e.viewStatus="",e.sizeRules=[{max:200,size:"tile"},{min:201,max:450,size:"small"},{min:451,size:"normal"}],e.alerts=[],e.selectedTypes=P(),e.$watch("data",function(){l.isUndefined(e.data)||(e.places=e.data,e.redraw())},!0),e.$watch("filters",l.debounce(function(){e.status.isLoading||e.status.isError||w()},800),!0),e.getMarkerOptions=function(e){var t=e.abbr||e.type.label,i=e.icon,r=e[s.titleField];if(t.length>s.maxLengthLabel&&(t=t.charAt(0)),!i){var o=e.color||x(e.type.id);i=s.isCanvasSupported()?n.canvasIcon(t,o):n.googleIcon(t,o),e.icon=i}return{title:r?r+"":"",icon:i}},e.search=function(t){!t||l.isEmpty(t.location)?U().then(function(t){e.latitude=t.location.lat(),e.longitude=t.location.lng(),w().then(function(){e.filters.searchname=t.place.formatted_address})},function(){e.addAlert("The location you provided is not valid!","warning",s.alertTimeout)}):(e.latitude=t.location.lat(),e.longitude=t.location.lng(),w())},e.redraw=function(){e.$broadcast("gmMarkersRedraw","places")},e.addAlert=function(t,i,r){var a={msg:t,type:i||"error"};e.alerts.push(a),r&&o(function(){e.closeAlert(e.alerts.indexOf(a))},r,!1)},e.closeAlert=function(t){t>-1&&e.alerts.splice(t,1)},e.openInfoWindow=function(t,i){e.directionUrl=e.map.directionApiUrl+"?daddr="+t.location.latitude+","+t.location.longitude,e.place=t,e.infoWindow.open(i.getMap(),i)},e.resized=function(t){e.$broadcast("gmMapResize",e.mapId)},e.setView=function(t){var i="col-xs-6",r="col-xs-12",o="hidden";switch(e.viewStatus=t,e.mapClass="",e.listClass="",e.listSize="",e.mapSize="",e.viewStatus){case"map":e.listClass=o,e.mapSize=r;break;case"list":e.mapClass=o,e.listSize=r;break;case"split":e.listSize=i,e.mapSize=i}},d.isOldBrowser()&&o(e.redraw,2e3),e.toggleFilter=function(e,t){e.stopPropagation()},S()},e.PlacesCtrl.$inject=["$scope","$q","$filter","$timeout","lpWidget","lpPlaces","lpPlacesUtils","lpCoreUtils","httpService","angulargmUtils","lpCoreError","lpCoreBus"]}.call(t,i,t,e),!(void 0!==r&&(e.exports=r))},function(e,t){e.exports=o},function(e,t,i){var r;r=function(require,e,t){"use strict";e.placesList=function(e,t,i){return{restrict:"A",replace:!0,scope:{places:"=placesObjects",map:"=mapObject",filters:"=filterObject"},controller:["$scope","$element","angulargmUtils",function(e,i,r){e.isOldBrowser=r.isOldBrowser(),e.css={detailSection:"col-md-6 col-xs-6"},e.openDetails=function(t){(t.showDetails===!1||void 0===t.showDetails)&&(t.showDetails=!0,t.mapUrl=e.map.staticMapApiUrl+"?zoom="+e.map.staticMapZoom+"&size="+e.map.staticMapThumbSize+"&markers=color:red%7C"+t.location.latitude+","+t.location.longitude,t.directionUrl=e.map.directionApiUrl+"?daddr="+t.location.latitude+","+t.location.longitude)},e.closeDetails=function(e,t){t.stopPropagation(),e.showDetails=!1},e.loadMorePlaces=function(){t.publish("launchpad-retail.places.loadMore",{},!0)}}],templateUrl:e.getWidgetBaseUrl(i)+"/templates/placesList.html"}},e.placesList.$inject=["lpCoreUtils","lpCoreBus","lpWidget"]}.call(t,i,t,e),!(void 0!==r&&(e.exports=r))}])});