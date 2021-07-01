;(function (global,$) {
	
	var MpJ = function(firstname, lastName, language) {
		return new MpJ.init(firstname, lastName, language)
	}

	var supportedLanguage = ['en', 'de'];

	var greetings = {
		en: 'Hello',
		de: 'Hallo'
	};

	var formalGreetings = {
		en: 'Greetings',
		de: 'Groeten'
	};

	var logMessages = {
		en: 'Logged In',
		de: 'Ingelogd'
	}

	MpJ.prototype = {
		fullName: function() {
			return this.firstName + ' ' + this.lastName 
		},

		validate: function() {
			if (supportedLanguage.indexOf(this.language) === -1) {
				throw "Invalid language"
			}
		},
		
		greetings: function() {
			return greetings[this.language] + ' ' + this.firstName + ' ' + this.lastName + '!' 
		},

		formalGreetings: function () {
			return formalGreetings[this.language] + ' ' + this.fullName() + '!'
		},

		greet: function (formal) {
			var msg;

			if (formal) {
				msg = this.formalGreetings();
			} else {
				msg = this.greetings()
			}

			if (console) {
				console.log(msg)
			}

			return this
		},

		log: function () {
			if (console) {
				console.log(logMessages[this.language] + ': ' + this.fullName())
			}

			return this
		},

		setLang: function (lang) {
			this.language = lang;

			this.validate();

			return this;

		},
		HTMLGreeting: function (selector, formal) {
			if (!$) {
				throw 'jQuery not loaded'
			}

			if (!selector) {
				throw 'No jQuery selector'
			}

			var msg;

			if (formal) {
				msg = this.formalGreetings();
			} else {
				msg = this.greetings()
			}

			$(selector).html(msg);

			return this;
		}
	}

	MpJ.init = function (firstName, lastName, language) {
		var self = this
		self.firstName = firstName || ''
		self.lastName = lastName || ''
		self.language = language || 'en'
	}

	MpJ.init.prototype = MpJ.prototype;

	global.MpJ = global.MpJ$ = MpJ
 
}(window,jQuery))