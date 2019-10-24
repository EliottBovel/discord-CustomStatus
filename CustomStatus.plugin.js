//META{"name":"CustomStatus"}*//

class CustomStatus {
	getName() { return "CustomStatus"; }

	getVersion() { return "0.1.0"; }

	getAuthor() { return "El10tt"; }

	getDescription() { return "Enable the custom status feature on discord."; }

	//legacy
	load () {}

	start() {
		switch(this.getUser().flags){
			case NaN:
				this.getUser().flags = 1
			default:
				if(this.getUser().flags%2 == 0){
					this.getUser().flags += 1
				}
		}
	}

	stop() {
		this.getUser().flags -= 1
	}

	getUser() {
		return Object.values(webpackJsonp.push([
			[],
			{
				['']: (_, e, r) => {
					e.cache = r.c
				}
			},
			[
				['']
			]
		]).cache).find(m => m.exports && m.exports.default && m.exports.default.getCurrentUser !== void 0).exports.default.getCurrentUser();
	}
}
