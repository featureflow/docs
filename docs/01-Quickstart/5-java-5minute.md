---
title: Java - 5 Minute Test
sidebar_label: Java - 5 Minute Test
slug: /java-5minute
---

# Java - 5 Minute Test

Get Featureflow running in your Java application in under 5 minutes.

## Prerequisites

If you haven't already, [create a free Featureflow account](https://app.featureflow.io/). New accounts include a default project with test and production environments, plus an example feature.

## 1. Clone the Example Project

```bash
git clone https://github.com/featureflow/featureflow-fiveminute-java.git
cd featureflow-fiveminute-java
```

## 2. Add Your API Key

Edit `HelloWorld.java` and replace the placeholder with your **Server Environment API Key**.

On your project page, find the **Environments** section and click the key icon next to your environment:

![Project Environments](/img/2-0/project-environments.png)

Copy the **Server SDK API Key** (starts with `sdk-srv-env-`):

![API Keys Modal](/img/2-0/project-environments-api-key.png)

Update the code:

```java
FeatureFlowClient client = new FeatureFlowClient.Builder("srv-env-YOUR_API_KEY")
```

## 3. Get the Feature Key

The example uses `example-feature`. You can find feature keys in the **Features** section of your project:

![Features List](/img/2-0/project-features.png)

The feature key is shown in the **KEY** column (e.g., `my-new-feature`, `example-feature`).

## 4. Build and Run

```bash
./mvnw clean compile assembly:single
java -jar target/featureflow-fiveminute-java-1.0.0-SNAPSHOT-jar-with-dependencies.jar
```

With the default configuration, you should see:

```
The variant is not on!
```

## 5. Toggle the Feature

In the Featureflow dashboard, enable the `example-feature` in your environment. The application will receive the update in real-time:

```
Received a control update event: example-feature variant: on
```

**Congratulations!** You've successfully integrated Featureflow.

---

## Going Further: User Targeting

Want to target features to specific users? Try the `HelloWorldWithUser` example.

### 1. Update the Main Class

Edit `pom.xml` to use `HelloWorldWithUser`:

```xml
<plugin>
  <artifactId>maven-assembly-plugin</artifactId>
  <configuration>
    <archive>
      <manifest>
        <mainClass>HelloWorldWithUser</mainClass>
      </manifest>
    </archive>
    <descriptorRefs>
      <descriptorRef>jar-with-dependencies</descriptorRef>
    </descriptorRefs>
  </configuration>
</plugin>
```

### 2. Add Your API Key

Update `HelloWorldWithUser.java` with your Server API Key.

### 3. Build and Run

```bash
./mvnw clean compile assembly:single
java -jar target/featureflow-fiveminute-java-1.0.0-SNAPSHOT-jar-with-dependencies.jar
```

The `new-feature` will be automatically registered in Featureflow.

### 4. Create a Targeting Rule

In Featureflow:
1. Click **Update Rules** for `example-feature`
2. Click **Add Rule**
3. Set: IF `user_role` equals `admin` → show variant `on`
4. Set the default (ELSE) to variant `off`

![Feature Targeting](/img/2-0/feature-targeting.png)

Since the example user has an `admin` role, the feature will be enabled. Change the role to `standard_user` in the code and rerun — the feature will be disabled.

### 5. Add Custom Variants

You can add more variants beyond `on`/`off`:

1. Click the feature name to edit settings
2. Click **Add Variant** and create an `enhanced` variant
3. Update rules to show `enhanced` to `pvt_tester` users

```java
FeatureflowUser user = new FeatureflowUser("flo@example.com")
    .withAttribute("age", 32)
    .withAttribute("signup_date", new DateTime(2017, 1, 1, 12, 0, 0, 0))
    .withStringAttributes("user_role", Arrays.asList("pvt_tester"))
    .withAttribute("tier", "gold");
```

## Next Steps

- [Gradual rollouts](/docs/gradual-rollouts) — release to a percentage of users
- [Managing variants](/docs/manage-feature-variants) — create custom feature states
- [Targeting features](/docs/targeting-features) — control who sees what
- [Quick Start - Frontend](/docs/quick-start-frontend) — add client-side feature flags
