/**
 * Alias for positional parameters that most API calls can take in.
 */
export type LoggingExtraParameters = {
	extras?: Map<string, string>;
};

/**
 * An interface for logging messages. Extend it to your own desires and styling and then put it to work with {@link putLumberdashToWork} function.
 */
export interface LumberdashClient {
	/**
	 * Logs an informational message.
	 *
	 * @param message - content of the message as string.
	 * @param extras - a set of additional values that may be useful for the client when logging the message.
	 */
	logMessage(message: string, extras: LoggingExtraParameters): void;

	/**
	 * Logs a warning message.
	 *
	 * @param message - content of the message as string.
	 * @param extras - a set of additional values that may be useful for the client when logging the message.
	 */
	logWarning(message: string, extras: LoggingExtraParameters): void;

	/**
	 * Logs a fatal message. This call is different than {@link logError} in the sense that it should be read as the last message before the program shutdown's
	 * due to a fatal error.
	 *
	 * @param message - content of the message as string.
	 * @param extras - a set of additional values that may be useful for the client when logging the message.
	 */
	logFatal(message: string, extras: LoggingExtraParameters): void;

	/**
	 * Logs an error message.
	 *
	 * @param error - content of the error.
	 */
	logError(error: Error): void;
}
