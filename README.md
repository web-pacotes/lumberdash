# lumberdash

A simple, yet clean, top-level logging API with support for multiple clients with zero modification fees 🪵

![npm version](https://badgen.net/npm/v/@web-pacotes/lumberdash) ![npm total downloads](https://badgen.net/npm/dt/@web-pacotes/lumberdash) ![bundlephobia bundle size](https://badgen.net/bundlephobia/min/@web-pacotes/lumberdash)

---

## How to use

Lumberdash comes with baterries included, so you can go straight ahead and try it with either `emoji` and `console` clients:

```typescript
// Provide lumberdash clients that will log messages.
const clients = [new ConsoleLumberdashClient(), new EmojiLumberdashClient()];

// Put them to work!
putLumberdashToWork(clients);

// Start logging from top level API.
logMessage('My first lumberdash logging message!');
```

However, if the bundled clients do not fit your style, you can easily create a new lumberdash client. Start by defining an implementation of [LumberdashClient](src/lumberdash/client.ts):

```typescript
import { LoggingExtraParameters, LumberdashClient } from '@web-pacotes/lumberdash';

class KaomojiLumberdashClient extends LumberdashClient {}
```

Then, implement the API logging methods:

```typescript
logMessage(message: string, extras: LoggingExtraParameters): void {
    console.info(`(◕‿◕) (${message})`, extras);
}

logWarning(message: string, extras: LoggingExtraParameters): void {
    console.warn(`(⇀‸↼‶) (${message})`, extras);
}

logFatal(message: string, extras: LoggingExtraParameters): void {
    console.trace(`(×_×) (${message})`, extras);
}

logError(error: Error): void {
    console.error(`(｡•́︿•̀｡) (${error})`);
}
```

Once the new client is implemented, you can go ahead and put it to work and it will work out of the box!

```typescript
import { putLumberdashToWork } from '@web-pacotes/lumberdash';
import { KaomojiLumberdashClient } from 'my-client-source';

const clients = [new KaomojiLumberdashClient()];
putLumberdashToWork(clients);
```

## Features

- Clean and simple top-level loggin API
- Easy to extend new behaviour by creating new clients
- Batteries included: use bundled clients `console` and `emoji`

---

## Bugs and Contributions

Found any bug (including typos) in the package? Do you have any suggestion
or feature to include for future releases? Please create an issue via
GitHub in order to track each contribution. Also, pull requests are very
welcome!

To contribute, start by setting up your local development environment. The [setup.md](setup.md) document will onboard you on how to do so!