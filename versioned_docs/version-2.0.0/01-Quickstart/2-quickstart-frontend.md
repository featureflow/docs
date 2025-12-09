---
title: Quick Start - Frontend
sidebar_label: Quick Start - Frontend
slug: /quick-start-frontend
---

Get Featureflow integrated into your frontend application in minutes.

:::tip SDK Options
This guide uses the core JavaScript SDK. Framework-specific SDKs are also available:
- [React SDK](https://github.com/featureflow/react-featureflow-client)
- [Angular SDK](https://github.com/featureflow/featureflow-angular)
:::

## 1. Install the SDK

```bash
npm install --save featureflow-client
```

## 2. Get Your API Key

Find your **Client SDK API Key** on the Projects page. Click the key icon next to your environment:

![Environment Key](/img/2-0/quickstart-fe-env-key.png)

![API Key Modal](/img/2-0/quickstart-api-key-modal.png)

## 3. Initialize the Client

```javascript
import Featureflow from 'featureflow-client';

const user = {
    key: 'user-123',
    attributes: {
        name: 'John Smith',
        user_role: 'beta_user',
        age: 32,
        signup_date: '2017-03-07T02:34:13+00:00'
    }
};

const featureflow = Featureflow.init('<Client SDK API Key>', user);
```

User attributes enable [targeting rules](/targeting-features). If you don't have user information, omit the user parameter — Featureflow will use an anonymous ID.

## 4. Evaluate Features

Check if a feature is enabled:

```javascript
if (featureflow.evaluate('my-feature-key').isOn()) {
    // Feature is enabled
}

if (featureflow.evaluate('my-feature-key').isOff()) {
    // Feature is disabled
}
```

For features with custom variants, use `.is()`:

```javascript
if (featureflow.evaluate('my-feature-key').is('variant-a')) {
    // Show variant A
}
```

**You're done!**

## Next Steps

- [Create features](/create-features) in the dashboard
- [Gradual rollouts](/gradual-rollouts) — release to a percentage of users
- [Targeting features](/targeting-features) — control who sees what
- [JavaScript SDK reference](/javascript-client) — full API documentation