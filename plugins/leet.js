module.exports = {
	name: 'leet',
    usage: '<p>leet <message>',
    permission: 1,
    help: 'Returns the input, but in 1337speak.',
	main: function(bot, message) {
		message.channel.sendMessage(leet(message.content));
		
		function leet(str) {
			var map = {
				'a': '4',
				'e': '3',
				'f': 'ph',
				'g': '9',
				'l': '1',
				'o': '0',
				's': '5',
				't': '7',
				'y': '\`/'
			};
			if (str === null || typeof str === 'undefined') {
				return;
			}

			var newStr = '';

			for (var i = 0; i < str.length; i++) {
				newStr += map[str[i].toLowerCase()] || str[i];
			}

			return newStr;
		}
	}
};