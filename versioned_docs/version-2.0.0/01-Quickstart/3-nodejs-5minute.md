---
title: Node.js - 5 Minute Test
sidebar_label: Node.js - 5 Minute Test
slug: /nodejs-5minute
---

# Node.js - 5 Minute Test

Get Featureflow running in your Node.js application in under 5 minutes.

## Prerequisites

If you haven't already, [create a free Featureflow account](https://app.featureflow.io/). New accounts include a default project with test and production environments, plus an example feature.

## 1. Clone the Example Project

```bash
git clone https://github.com/featureflow/featureflow-fiveminute-node
cd featureflow-fiveminute-node
npm install
```

## 2. Add Your API Key

Edit `helloworld.js` and replace the placeholder with your **Server Environment API Key**. You can find this under the API Keys link on your project page.

```javascript
const featureflow = new Featureflow.Client({ apiKey: 'srv-env-YOUR_API_KEY' });

featureflow.ready(function() {
    if (featureflow.evaluate('example-feature').isOn()) {
        console.log('The variant is on!');
    } else {
        console.log('The variant is not on!');
    }
});
```

## 3. Run the Program

```bash
node helloworld.js
```

With the default configuration, you should see:

```
The variant is not on!
```

## 4. Toggle the Feature

In the Featureflow dashboard, enable the `example-feature` in your environment:

![Feature Targeting](/img/2-0/feature-targeting.png)

Run the program again:

```bash
node helloworld.js
```

Now you should see:

```
The variant is on!
```

**Congratulations!** You've successfully integrated Featureflow.

:::important
**The Featureflow client must be a singleton.** In production applications, create the client once at startup. See the [Express example](https://github.com/featureflow/featureflow-node-example) for a real-world implementation.
:::

## Next Steps

- Explore `helloworldWithUser.js` to learn about [targeting features](/targeting-features) to specific users
- [Quick Start - Frontend](/quick-start-frontend) — add feature flags to your web app
- [Gradual rollouts](/gradual-rollouts) — release to a percentage of users
- [Managing variants](/manage-feature-variants) — beyond on/off
