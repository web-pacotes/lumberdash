import { LoggingExtraParameters, LumberdashClient } from '../lumberdash';

/**
 * An implementation of {@link LumberdashClient} that uses {@link console} API to log messages in the terminal/browser + emojis.
 */
export class EmojiLumberdashClient implements LumberdashClient {
	logMessage(message: string, extras: LoggingExtraParameters): void {
		console.info(`ℹ️  (${message})`, extras);
	}

	logWarning(message: string, extras: LoggingExtraParameters): void {
		console.warn(`⚠️  (${message})`, extras);
	}

	logFatal(message: string, extras: LoggingExtraParameters): void {
		console.trace(`💀  (${message})`, extras);
	}

	logError(error: Error): void {
		console.error(`🐛  (${error})`);
	}
}
