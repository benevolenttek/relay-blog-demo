[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/with-relay-modern)
# Basic Blog Demo with NextJS and Relay Modern

## About

A basic blog web application to demonstrate Nextjs and React Relay Modern.

[Relay Modern](https://facebook.github.io/relay/docs/relay-modern.html) is a new version of Relay designed from the ground up to be easier to use, more extensible and, most of all, able to improve performance on mobile devices. Relay Modern accomplishes this with static queries and ahead-of-time code generation.

## TODOs

Figure out if these files are used or could be disguarded: commons.js, main.js, manifest.js

## Dependencies

This demo relies on [graph.cool](https://www.graph.cool) for its GraphQL backend. I have set one up as a default for testing.

## Credits

This demo is based on two examples, the [Nextjs Relay example](https://github.com/zeit/next.js/examples/with-relay-modern) and the [official Relay Example](https://github.com/relayjs/relay-examples/tree/master/todo).

## How to use

Install it:

```bash
npm install
```

Download schema introspection data from configured Relay endpoint 

```bash
npm run schema
```

Run Relay ahead-of-time compilation (should be re-run after any edits to components that query data with Relay)
```bash
npm run relay
```

Run development server
```bash
npm run dev
```

Run production server
```bash
npm run build
npm start
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download)):

```bash
now
```

