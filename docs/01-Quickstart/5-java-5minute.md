---
title: Java 5 Minute test
sidebar_label: Java 5 Minute test
slug: /java-5minute
---

## Want to try us out? Let's do the 5 minute test:

[Firstly, If you haven't signed up yet you go and get a free account here](https://app.featureflow.io/)

Once signed up, we give you a default project with a test and production environment plus one example feature.

Now your ready to go.

### 1. Clone - Clone the github repo from here:

```bash
git clone https://github.com/featureflow/featureflow-fiveminute-java.git
```

### 2. Set your environment api Key

Edit _'HelloWorld.java'_ to add your server environment API key.

Replace `{{YOUR_SERVER_ENVIRONMENT_API_KEY_HERE}}` with the key which can be retrieved under the 'API Keys' Link on the top right of your environment page.

This is your unique key - used to identify the server when you call to get your features.

![Server Api Key](/img/java-5minute-1.png)

```java
FeatureFlowClient client = new FeatureFlowClient.Builder("{{YOUR_SERVER_ENVIRONMENT_API_KEY_HERE}}")
```

### 3. Evaluate a feature
We will now evaluate a feature - to do this we need to set the feature key in the evaluate call. You can get the feature key from the features list in featureflow (in brackets) next to the name.

If you have just created a new account you can use the 'example-feature' that we have created for you. We have already added an example of evaluating the 'example-feature' in the code

![Feature Key](/img/java-5minute-2.png)

```java
if (client.evaluate(MyFeatures.EXAMPLE_FEATURE.getValue()).isOn()) {
```

### 4. Run the program

Now, run the program and observe the output

You can run it using the mvn command as below (or of course debug it in your favourite IDE).

```bash
./mvnw clean compile assembly:single

java -jar target/featureflow-fiveminute-java-1.0.0-SNAPSHOT-jar-with-dependencies.jar
```

```bash
The variant is not on!
```

### 5. Update your feature

In featureflow, toggle your feature on in your environment and observe the output.

```bash
Received a control update event: example-feature variant: on
```

### 6. Complete! 

You have simply and successfully enabled a very powerful way to manage and release your features.

__Congratulations!__ That was easy hey?

So what can I do with this? Have a look at our [Developer use cases](http://www.featureflow.io/)

or continue below to try adding some user information to your evaluation.

## The ten minute test

Now have a look at _HelloWorldWithUser_ to get and idea of how you can actively register, target and manage your features.

1. Update HelloWorldWithUser.java and add your server API key as before.

2. Update pom.xml to call _HelloWorldWithUser_ as the main class

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

3. In HelloWorldWithUser we provide a user (in the 'getUser()' method) - the user contains information about which is used to evaluate which variant of a feature matches. We have also added another feature 'new-feature'.

4. Rebuild and run

```bash
./mvnw clean compile assembly:single

java -jar target/featureflow-fiveminute-java-1.0.0-SNAPSHOT-jar-with-dependencies.jar
```


Note that the new feature 'new-feature' will be automatically registered and added to your features list in the featureflow admin console, to create a feature in featureflow you only need create it in code. If you create it in the console first however it will be linked via the key.

5. Now lets add a rule to target the feature. In featureflow,

* click the 'Update Rules' button for 'example-feature' 
* click the 'Add Rule' button 
* add a rule which says IF 'user_role' is equal to 'admin' then show variant 'on' ELSE Default to variant 'off'

![Feature Rule](/img/java-5minute-3.png)

6. Rerun your application. We know the user has an 'admin' role (as its set in our user in code) - you will find that example-feature is on. Only admins will see this feature, everyone else will see the off variant.

7. Lets change the user to be a 'standard_user' - edit your code as such:

```java
FeatureflowUser user = new FeatureflowUser("flo@example.com")
                .withAttribute("age", 32)
                .withAttribute("signup_date", new DateTime(2017, 1, 1, 12, 0, 0, 0))
                .withStringAttributes("user_role", Arrays.asList("standard_user"))
                .withAttribute("tier", "gold")
```

8. Recompile and rerun the code and you will find that the example-feature is 'off' - we did not match the admin rule and so the 'standard_user' gets the 'off' variant.

#### Add some variants
Ok lets keep going, say you have a new version of your feature - it may be an improvement or a version you want to show only to particular users - you can define it as a new 'variant'

9. Click the 'Example Feature' title to edit the feature
10. Click 'Add variant' and name it 'Enhanced' with a key of 'enhanced' - this is our new version of the feature. Click 'update feature' to save.

![Feature Variants](/img/java-5minute-4.png)

11. Click 'Update rules' for example feature. Set the rule to say:
    _'If user_role is equal to 'pvt_tester' then show variant 'Enhanced' ELSE default to variant on_

![Feature Rules](/img/java-5minute-5.png)

You have just set up a simple production test scenario. Your 'pvt_tester' role will see the new version whilst all other users will see the standard 'on' version.

12. Now you have the idea, try changing your 'user_role' in the code to 'pvt_tester' and see the resulting variant.

```java
private static FeatureflowUser getUser(){
        FeatureflowUser user = new FeatureflowUser("flo@example.com")
                .withAttribute("age", 32)
                .withAttribute(("signup_date", new DateTime(2017, 1, 1, 12, 0, 0, 0))
                .withStringAttributes("user_role", Arrays.asList("pvt_tester"))
                .withAttribute("tier", "gold");
        return user;
    }
```

![Evaluation Outpu](/img/java-5minute-6.png)

We could go on, but I think our ten minutes are up.

You may wish to go a further and learn about [gradual rollouts](/gradual-rollouts), more about [variants](/managing-feature-variants) and [feature targeting](/targeting-features).

You may also want to try the same 5 minute test in the javascript API so you can get a synchronised front and back-end.

Happy toggling!`

