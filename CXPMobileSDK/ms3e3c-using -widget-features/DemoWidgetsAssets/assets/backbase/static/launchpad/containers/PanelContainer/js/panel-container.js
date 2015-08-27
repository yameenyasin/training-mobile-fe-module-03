/*global b$, gadgets, lp, bd, window, console $*/
(function (b$, gadgets, lp, bd, window, $) {
    "use strict";
    var Container = b$.bdom.getNamespace('http://backbase.com/2013/portalView').getClass('container');
//  ----------------------------------------------------------------
    var PanelContainer = Container.extend(function (bdomDocument, node) {
        Container.apply(this, arguments);
        this.isPossibleDragTarget = true;
    }, {
        localName: 'PanelContainer',
        namespaceURI: 'launchpad',
        reflow: function(e) {
            var self = this;
            window.setTimeout(function(){
                Container.prototype.reflow.call(self, e);
            }, 0);

        }
    }, {
        template: function(json) {
            var data = {item: json.model.originalItem};
            var sTemplate = window.launchpad.PanelContainer(data);
            return sTemplate;
        }
    });
})(b$, gadgets, lp, bd, window, $);
