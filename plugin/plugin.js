exports.Plugin = (function() {
	function Plugin(bot) {
		this.bot = bot;
		this.database = bot.database;
		this.commands = {
            'example' : 'onCommandExample'
        };
	}
	
	Plugin.prototype.onCommandExample = function (from, to, message, args) {};

	return Plugin;
})();