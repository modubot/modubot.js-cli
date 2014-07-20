export class Plugin {
	bot:any;
	client:any;
	commands:any;

	constructor(bot:any) {
		this.bot = bot;
		this.client = bot.client;
		this.commands = {
			'example': 'onCommandExample'
		};

	}

	onCommandExample(from:string, to:string, message:string, args:any) {}

}