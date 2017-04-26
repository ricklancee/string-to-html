var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.toHtml = factory();
})(this, function () {
	'use strict';

	var contextRange = document.createRange();
	contextRange.setStart(document.body, 0);

	function toHtml(string) {
		return contextRange.createContextualFragment(string);
	}

	return toHtml;
});