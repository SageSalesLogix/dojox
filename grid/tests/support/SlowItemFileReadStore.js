define([
	"dojo/data/ItemFileReadStore",
	"dojo/_base/declare",
	"dojo/_base/lang"
], function (ItemFileReadStore, declare, lang) {
return declare("dojox.grid.tests.support.SlowItemFileReadStore", ItemFileReadStore, {
	delay: 1000, // delay in milliseconds for each fetch
	constructor: function (options) {
		if (options) {
			this.delay = options.delay > 0 ? options.delay : this.delay;
		}
		this.inherited(arguments);
	},
	_fetchItems: function () {
		window.setTimeout(lang.hitch({self: this, args: arguments}, function() {
			this.self.inherited('_fetchItems', this.args);
		}), this.delay);
	}
});
});