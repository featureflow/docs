---
title: Quick Start - AI coding agent
sidebar_label: Quick Start - AI coding agent
slug: /quick-start-ai-agent
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The fastest way to add Featureflow to a project is to hand the job to your AI coding agent —
Claude Code, Cursor, Copilot, Codex or any other tool that reads agent skills.

[Featureflow skills](https://github.com/featureflow/featureflow-skills) are instructions, not
code. Once installed, your agent loads the relevant one on its own when you ask for something it
covers: installing an SDK, putting code behind a flag, rolling it out, measuring it, and deleting
it afterwards. Each skill carries the parts that are easy to get wrong — which key is secret and
which is public, why the client is a singleton, why bucketing is stable, what order rules match
in.

## 1. Install the skills

<Tabs>
<TabItem value="cli" label="Any agent (skills CLI)" default>

Run this in the root of your project:

```bash
npx skills add featureflow/featureflow-skills -y
```

This copies every Featureflow skill into your project. To install just one, name it:

```bash
npx skills add featureflow/featureflow-skills --skill featureflow-setup -y
```

</TabItem>
<TabItem value="claude-code" label="Claude Code plugin">

Inside Claude Code:

```
/plugin marketplace add featureflow/featureflow-skills
/plugin install featureflow@featureflow
```

The plugin is available in every project, and updates come through `/plugin`.

</TabItem>
<TabItem value="manual" label="Manual">

Copy the skills into the project, or into `~/.claude/skills` to have them everywhere:

```bash
git clone https://github.com/featureflow/featureflow-skills.git
cp -r featureflow-skills/skills/* .claude/skills/
```

Keep each skill's `references/` directory next to its `SKILL.md` — the skills load those files
by relative path.

For tools without a skills directory, the skills are plain Markdown with YAML frontmatter. Point
your tool's rules or context mechanism at `skills/*/SKILL.md`, or paste the one you need into
the conversation.

</TabItem>
</Tabs>

## 2. Give the agent your SDK keys

Every environment has two SDK keys, found in the Featureflow dashboard under your project's
environment → **API Keys**:

- **Server SDK key** (`sdk-srv-env-…`) — secret. Server-side code only; keep it in an environment
  variable.
- **Client SDK key** — public. Safe in browser and mobile code.

Paste them into your prompt, or tell the agent where to find them. The skills instruct it to keep
keys out of anything you commit.

:::tip Brand-new organisation?
The first time you sign in, the dashboard shows a ready-made prompt with your keys already in it.
Copy it into your agent and the dashboard confirms the moment your app connects.
:::

## 3. Ask for the outcome

Ask for the outcome; the agent picks the skill.

> Add Featureflow to this app

Detects the stack, installs the right SDK, wires a single client from an environment variable,
and proves it with one real evaluation.

> Put the new checkout behind a flag

Creates `new-checkout` off in every environment, wraps the smallest safe boundary, keeps the old
path intact, tests both branches, and tells you how to turn it on.

> Roll it out to 10%

Explains that buckets are stable and ramps are additive, orders the rules so your excluded
accounts stay excluded, and makes the change — or walks you through the dashboard for anything
touching production.

> Which flags can we delete?

Greps the codebase, reconciles against what Featureflow knows, and reports what is safe to remove
— flagging the mobile clients and other repos that might still read a flag before anything is
deleted.

## The skills

| Skill | Use it when |
|---|---|
| **featureflow-setup** | Adding Featureflow to a project for the first time — pick the right SDK, wire the client, handle keys safely |
| **featureflow-add-flag** | Putting a new code path behind a flag, with both branches working and a removal plan |
| **featureflow-targeting** | Rolling out by percentage, targeting a segment, ordering rules, or reaching for the kill switch |
| **featureflow-experiments** | A/B testing a change and tracking conversions against variants |
| **featureflow-cleanup-flags** | Auditing which flags a codebase uses, and retiring the ones that are done |
| **featureflow-mcp** | Connecting the Featureflow MCP server so the agent can read and change real flag state |

Languages covered: Java · Node · browser JavaScript/TypeScript · React · React Native · Python ·
Ruby · Go · .NET. Per-SDK install, client construction, evaluation idioms and testing notes live
in the [featureflow-setup references](https://github.com/featureflow/featureflow-skills/tree/main/skills/featureflow-setup/references).

## Let the agent change flags too

The skills work on their own. With the [Featureflow MCP server](/mcp-integration) connected, your
agent can also read and change real flag state — create the flag, turn it on in staging, ramp the
rollout — instead of asking you to do it in the dashboard. Set it up from **Administration** →
**Integrations** → **AI assistants (MCP)**.

## Prefer to do it yourself?

The step-by-step guides cover the same ground by hand:

- [Quick Start - Server](/quick-start-server)
- [Quick Start - Frontend](/quick-start-frontend)

## Links

- [featureflow-skills on GitHub](https://github.com/featureflow/featureflow-skills) — corrections
  welcome, especially where a skill describes an SDK inaccurately
- [Featureflow MCP server](https://github.com/featureflow/featureflow-mcp)
