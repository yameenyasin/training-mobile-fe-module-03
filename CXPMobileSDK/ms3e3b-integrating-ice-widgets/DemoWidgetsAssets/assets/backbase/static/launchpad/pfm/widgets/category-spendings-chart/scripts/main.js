define(function(require, exports, module) {
    'use strict';

    module.name = 'widget-category-spendings-chart';

    var base = require('base');
    var core = require('core');
    var ui = require('ui');

    var deps = [
        core.name,
        ui.name
    ];

    module.exports = base.createModule(module.name, deps)
        .config(require('./config'))
        .factory(require('./factories'))
        .controller(require('./controllers'))
        .directive(require('./directives'));
});

