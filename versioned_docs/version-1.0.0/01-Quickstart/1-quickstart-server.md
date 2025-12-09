---
title: Quick start - server
sidebar_label: Quick start - Server
slug: /quick-start-server
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This Quick start is designed to get featureflow into your existing application as quickly as possible.

## Install the Featureflow client

<Tabs>
<TabItem value="java" label="Java">

```xml
<dependency>
    <groupId>io.featureflow</groupId>
    <artifactId>featureflow-java-sdk</artifactId>
    <version>1.2.1</version>
</dependency>
```

</TabItem>
<TabItem value="nodejs" label="NodeJS">

```bash NodeJS

npm install featureflow-node-sdk

```

</TabItem>
<TabItem value="dotnet" label=".NET">

```bash .NET
Install-Package Featureflow
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```bash

# Without bundler
$ gem install featureflow

# With bundler
# in your Gemfile
gem 'featureflow'
# then
$ bundle install

```

</TabItem>
<TabItem value="go" label="Go">

```go

package main

import (
  "github.com/featureflow/featureflow-go-sdk/featureflow"
)

```

</TabItem>
</Tabs>

## Create a Featureflow client and register features

:::important
The featureflow client must be a Singleton in your application.
:::
Do not instantiate featureflow on every request This will cause a reload of features every time which will incur a performance penalty and excessive usage.

The Featureflow Client will maintain an optimised cache of all your feature rules.

<Tabs>
<TabItem value="java" label="Java">

```java
FeatureflowClient client = new  FeatureflowClient
        .Builder({Server Environment Api Key})
        .withFeatures(Arrays.asList(
        new Feature("logout-button", Variant.off),
        new Feature("example-feature", Variant.off)),
        ));

//The client is a singleton, so for example if you use spring you might declare it in a @Configuration class.

//we recommend that you use an enum for your feature keys - this helps you track them in your IDE and reduces debt.
```

</TabItem>
<TabItem value="nodejs" label="NodeJS">

```javascript

var Featureflow = require('featureflow-node-sdk');

var withFeatures = [
    new Featureflow.Feature("logout-button").build(),
    new Featureflow.Feature("example-button").build(),
]

new Featureflow.Client({
    apiKey: "server-api-key",
    withFeatures: withFeatures
}, function(error, featureflow) {
    if (!error) {
        throw error;
    }
    // featureflow is now initialized
    featureflow
});

//You should only create one instance of a Featureflow.Client

```

</TabItem>
<TabItem value="dotnet" label=".NET">

```dotnet .NET
using Featureflow.Client;
var client = FeatureflowClientFactory.Create("srv-env-YOUR_SERVER_ENVIRONMENT_API_KEY");
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby

require 'featureflow'

with_features = [
  Featureflow::Feature.create('logout-button'),
  Featureflow::Feature.create('example-button')
]

featureflow = Featureflow::Client.new(api_key: "server api key", with_features: with_features)

```

</TabItem>
<TabItem value="go" label="Go">

```go

featureflowClient, error := featureflow.Client("server api", featureflow.Config{
  WithFeatures: []featureflow.FeatureRegistration{
    featureflow.WithFeature("logout-button", "off").Build(),
    featureflow.WithFeature("example-button", "off").Build(),
  },
})

```

</TabItem>
</Tabs>

Your 'Server Environment SDK Key' is available on your environment page in featureflow.

You may wish to register your features at startup. This provides additional benefits - we know immediately when a feature is available in an environment, you can provide an alternative failover variant (the default is 'off') - the failover variant is the variant that is chosen if there is no matching feature available to evaluate (if you are offline with no cache, misconfigured or the feature has not been created yet in featureflow). It also helps as a central place to refer to all your currently deployed features.

## Evaluate a feature

<Tabs>
<TabItem value="java" label="Java">

```java
//Without User
if(featureflowClient.evaluate("example-feature").isOn())) {
        //do something
        } else {
        //do not do something
        }

//With a User
        FeatureflowUser user = new FeatureflowUser("uniqueUserId")
        .withAttribute("tier", "silver")
        .withAttribute("age", 32)
        .withAttribute("signup_date", new DateTime(2017, 1, 1, 12, 0, 0, 0));

        if(featureflowClient.evaluate("example-feature", user).isOn()) {
        //do something
        }
```

</TabItem>
<TabItem value="nodejs" label="NodeJS">

```javascript
//Without Context Values
if (featureflow.evaluate("example-feature", "uniqueuserkey1").isOn())) {
    //do something
} else {
    //do not do something
}

//With a User
var UserBuilder = require("featureflow-node-sdk").UserBuilder;
var user = new UserBuilder('uniqueuserkey1')
    .withAttribute('tier', 'silver')
    .withAttribute('age', 32)
    .withAttribute('signup_date', new Date(2017, 0, 1, 12, 0, 0, 0))

if (featureflow.evaluate("example-feature", user).isOn()) {
    //do something
}
```

</TabItem>
<TabItem value="dotnet" label=".NET">

```dotnet .NET
var user = new User("1234");
user.WithAttribute("region", "sydney");
user.WithAttribute("days", new List<int> { 11, 1, 4, 29 });
user.WithSessionAttribute("dayofweek", 5);
var result = client.Evaluate("example-feature", user).Value();

 if (client.Evaluate("example-feature").IsOn())
    {
        //do something
    }
    if (client.Evaluate("example-feature").IsOff())
    {
        //do something
    }
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# without user attributes
if featureflow.evaluate("example-feature", "uniqueuserkey1").on?
  # do something
end

#with user attributes
user = Featureflow::UserBuilder.new('uniqueuserkey1')
.withAttributes(
                                        tier: 'silver',
                                        age: 32,
                                        signup_date: Time.new(2017, 1, 1, 12).iso8601
                                       ).build

if featureflow.evaluate("example-feature", user).on?
  # do something
end

```

</TabItem>
<TabItem value="go" label="Go">

```go
// without context values
if featureflowClient.EvaluateBasic("example-feature", "uniqueuserkey1").IsOn() {
    //do something
}

// with context values
user := featureflow.NewUserBuilder("uniqueuserkey1").
  WithAttribute("tier", "silver").
  WithAttribute("age", 23).
  WithAttribute("signup_date", "2017-01-01T12:00:00+00:00").
  Build()

if featureflowClient.Evaluate("example-feature", user).IsOn() {
    //do something
}

```

</TabItem>
</Tabs>

In the Server-side SDK's we create a FeatureFlow User and pass that into the 'evaluate' method.
The FeatureflowUser contains a a set of name/value pairs which give featureflow information on which you can base your feature rules. If you do not provide a user we will assume the user is 'anonymous'.

## Try it out!

You may now fire up your application - keep an eye on the features list in the featureflow admin panel and you will see your features appear with default on/off settings.

__Congratulations you're done!__

If you wish of course you can create the features via the featureflow UI - featureflow will make the connection using the feature Key.
To do this click 'New Feature' (in any environment) and enter a name and key:

![Create Feature](/img/quickstart-1-create-feature.png)

You will see your feature in the list - you will notice that it has an empty green circle next to it - this means we have not seen the feature yet in the environment.

* Register or evaluate the new feature in your SDK code (you can find the feature Key in the feature detail modal)
* Restart your application - You will find that the icon has updated to a ticked green circle as soon as we detect your new feature (ensure you're looking at the environment that matches your SDK environment key).

![Status Icon](/img/quickstart-2-toggle.png)

Thats the basics to get started. 

Check out the User guide for to learn how to manage gradual rollouts, targeting, and multiple feature variants. 

You may wish to try the  [javascript client SDK](docs/05-SDK_Guides/javascript.mdx) started to manage your front-end.