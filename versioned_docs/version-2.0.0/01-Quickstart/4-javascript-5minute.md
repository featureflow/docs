---
title: JavaScript - 5 Minute Test
sidebar_label: JavaScript - 5 Minute Test
slug: /javascript-5minute
---

# JavaScript - 5 Minute Test

Try Featureflow in your browser in under 5 minutes using CodePen — no installation required.

## Prerequisites

If you haven't already, [create a free Featureflow account](https://app.featureflow.io/).

## 1. Open the CodePen Example

Open the [Featureflow CodePen example](https://codepen.io/featureflow/pen/RzxzzJ).

## 2. Get Your API Key

Navigate to your project page and find the **Environments** section. Click the key icon next to your environment to view the API keys:

![Project Environments](/img/2-0/project-environments.png)

Copy the **Client SDK API Key** (starts with `sdk-js-env-`):

![API Keys Modal](/img/2-0/project-environments-api-key.png)

In the CodePen, update the `FF_KEY` variable with your key:

```javascript
const FF_KEY = 'sdk-js-env-YOUR_API_KEY';
```

## 3. Test It

1. Click **Run** in CodePen
2. Open your Featureflow dashboard in another tab
3. Toggle the `example-feature` on in your environment
4. Refresh the CodePen — the output will change!

**Congratulations!** You've seen Featureflow in action.

## Next Steps

- [Quick Start - Frontend](/quick-start-frontend) — integrate into your own project
- [Quick Start - Server](/quick-start-server) — add server-side feature flags
- [Targeting features](/targeting-features) — control who sees what
