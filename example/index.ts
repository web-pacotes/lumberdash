import {
	ConsoleLumberdashClient,
	EmojiLumberdashClient,
	logError,
	logFatal,
	logMessage,
	logWarning,
	putLumberdashToWork
} from 'lumberdash';

function main() {
	// Provide lumberdash clients that will log messages.
	const clients = [new ConsoleLumberdashClient(), new EmojiLumberdashClient()];

	// Put them to work!
	putLumberdashToWork(clients);

	// Start logging from top level API.
	logMessage('My first lumberdash logging message!');
	logWarning('Attemping to install lumbredash from npm...');
	logError(
		new Error(
			'Package lumbredash does not exist! Make sure you download the correct one (@web-pacotes/lumberdash)'
		)
	);
	logFatal('Exiting...');
}

main();
