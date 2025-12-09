---
title: NodeJS - 5 Minute test
sidebar_label: NodeJS - 5 Minute test
slug: /nodejs-5minute
---
## Want to test us out? Let's do the 5 minute test:

Ok, want to test us out in (less than) 5 minutes? Lets have a go!

Firstly, If you haven't signed up yet you can [go and get a free account here](https://app.featureflow.io/)

Once signed up, we give you a default project with a test and production environment plus one example feature.

Now your ready to go...

1. Clone the github repo from here:

```bash
git clone https://github.com/featureflow/featureflow-fiveminute-node
cd featureflow-fiveminute-node
npm install
```
2. Set your environment api Key

Edit './helloworld.js'

Add your server environment API key.

Replace `{{YOUR_SERVER_ENVIRONMENT_API_KEY_HERE}}` with the Server Environment SDK Key: which can be retrieved under the 'API Keys' Link on the top right of your environment page.

This is your unique key - used to identify the server when you call to get your features.

The code will look like this:

```javascript
var featureflow = new Featureflow.Client({apiKey: 'srv-env-23456abc...'});

featureflow.ready(function(){
    if (featureflow.evaluate('example-feature').isOn()) {
        console.log('The variant is on!');
    }
    else {
        console.log('The variant is not on!');
    }
    //featureflow is now initialized in this block
});
```

3. Evaluate a feature

We will now evaluate a feature - to do this we need to set the feature key in the evaluate call. You can get the feature key from the features list in featureflow (in brackets) next to the name.
If you have just created a new account you can use the 'example-feature' that we have created for you.

![Fedatures List](/img/quickstart-nodejs-1.png)

In 'helloworld.js' you will see an example of a feature evaluation:

```javascript
if (featureflow.evaluate('example-feature').isOn()){
  console.log('The variant is on!');
}
else{
  console.log('The variant is not on!');
}
```

:::note
In the above code we are evaluating the feature _'example-feature'_.

The first parameter we pass in is the key to identify the feature.

You can specify featureflow to startup with features defined in code.

Featureflow holds a local cache of all feature rules however in the event that the key cannot be found or some other error occurs then we will always fall back to failover value specified in your features passed in your config object, or if not specified it will default to 'off'.
:::

4. Run the program

Now, run the program and observe the output

You can run it using the node command below, or running the file using your favourite IDE.

```bash
node helloworld.js
```

If all runs well, and assuming you have setup you should get the following output.

```bash
The variant is not on!
```
5. Update your feature

In featureflow, toggle your feature on in your environment, run the program again and observe the output.

```bash
The variant is on!
```

6. __Complete!__ 

You have simply and successfully enabled a very powerful way to manage and release your features.

Congratulations! That was easy hey?

:::note
*** Ensure FeatureflowClient is a singleton!

NB: In a real world server you must ensure the Featureflow Client is a Singleton.

Featureflow pulls feature configurations on startup and optimises evaluations by caching those feature rules and only updating when necessary.

Check the https://github.com/featureflow/featureflow-node-example for an example using express.
:::

Now have a look at _helloworldWithUser.js_ to get and idea of how you can target your features to specific audiences.

or you might want to try the same [5 minute test](https://docs.featureflow.io/docs/featureflow-five-minute-javascript) in the javascript API so you can get end to end and beautifully synchronised management

or go a bit further and learn about [gradual rollouts](../02-User-Guide/4-gradual-rollouts.mdx), [variants](../02-User-Guide/3-manage-feature-variants.mdx) and [targeting features](../02-User-Guide/5-targeting-features.mdx).