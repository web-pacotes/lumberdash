import { LoggingExtraParameters, LumberdashClient } from './client';

/**
 * Global list of {@link LumberdashClient} used to log messages.
 */
const clients = new Array<LumberdashClient>();

/**
 * Default value for positional extra parameters.
 */
const DefaultExtrasParameters: LoggingExtraParameters = { extras: undefined };

/**
 * Initializes Lumberdash with multiple clients that will log to different buffers
 * when any top level log function is called.
 *
 * @param withClients - the list of {@link LumberdashClient} that will be used to log messages.
 */
export function putLumberdashToWork(withClients: LumberdashClient[]) {
	clients.length = 0;
	clients.push(...withClients);
}

/**
 * Logs an informational message.
 *
 * @param message - content of the message as string.
 * @param extras - a set of additional values that may be useful for the client when logging the message.
 */
export function logMessage(
	message: string,
	{ extras } = DefaultExtrasParameters
): void {
	clients.forEach((c) => c.logMessage(message, { extras: extras }));
}

/**
 * Logs a warning message.
 *
 * @param message - content of the message as string.
 * @param extras - a set of additional values that may be useful for the client when logging the message.
 */
export function logWarning(
	message: string,
	{ extras } = DefaultExtrasParameters
): void {
	clients.forEach((c) => c.logWarning(message, { extras: extras }));
}

/**
 * Logs a fatal message. This call is different than {@link logError} in the sense that it should be read as the last message before the program shutdown's
 * due to a fatal error.
 *
 * @param message - content of the message as string.
 * @param extras - a set of additional values that may be useful for the client when logging the message.
 */
export function logFatal(
	message: string,
	{ extras } = DefaultExtrasParameters
): void {
	clients.forEach((c) => c.logFatal(message, { extras: extras }));
}

/**
 * Logs an error message.
 *
 * @param error - content of the error.
 */
export function logError(error: Error): void {
	clients.forEach((c) => c.logError(error));
}
