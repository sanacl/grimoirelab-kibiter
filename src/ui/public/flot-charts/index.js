import $ from 'jquery';
if (window) window.jQuery = $;
require('ui/flot-charts/jquery.flot');
require('ui/flot-charts/jquery.flot.time');
require('ui/flot-charts/jquery.flot.canvas');
require('ui/flot-charts/jquery.flot.symbol');
require('ui/flot-charts/jquery.flot.crosshair');
require('ui/flot-charts/jquery.flot.selection');
require('ui/flot-charts/jquery.flot.pie');
require('ui/flot-charts/jquery.flot.stack');
require('ui/flot-charts/jquery.flot.threshold');
require('ui/flot-charts/jquery.flot.fillbetween');
module.exports = $;