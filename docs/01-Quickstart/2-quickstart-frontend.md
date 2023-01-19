---
title: Quick start - front end
sidebar_label: Quick start - Front End
slug: /quick-start-frontend
---

Featureflow will be enable to allow you to confidently manage your application and can be set up in a few simple steps. This is the quickstart for developers to easily integrate featureflow into their app.

For a more comprehensive guide, please see the readme in the SDK repositories:

https://github.com/featureflow/featureflow-javascript-sdk
https://github.com/featureflow/react-featureflow-client
https://github.com/featureflow/featureflow-angular

Start by installing the featureflow client:

```javascript
<script crossorigin="anonymous" src="https://cdn.featureflow.io/featureflow.js" ></script>
```

Next configure and create the featureflow client.
Enter your 'JS Client Environment Api Key' -this is available at the top of the environment features page in featureflow under the 'Api Key' link.

![Api Key](/img/quickstart-frontend-1.png)

```javascript

var user = {
    key: 'userId', //if logged in you can provide the unique user id here
  attributes: { //you can provide any values here to be evaluated
    'name': 'John Smith', //they can be string
    'user_role':'beta_user',
    'age' : 32, //number
    'signup_date': '2017-03-07T02:34:13+00:00' //or date 
    }
}//if you dont have any user information, you dont need to pass a user in -  we will use an anonymous id
var featureflow = Featureflow.init('<JS Client Environment Api Key>', user);
```


Define a feature in Featureflow. You will need to provide a unique-key which you will reference in your feature evaluation call. Save the default configuration for now. This is a simple 'on'/'off' feature. If it is on, they the variant of the feature evaluates to 'on', if it is disabled then the variant evaluates to 'off'.

Finally evaluate the feature in your code. You can do so using the following syntax.

```javascript
if (featureflow.evaluate('my-feature-key').is('on')){
    // do something if 'my-feature-key' evaluates to 'on'
}
```

The default variants of a feature, as mentioned above, are 'off' and 'on'. Because of this we have created two helper methods for you, `.isOn()` and `.isOff()`.

```javascript
if(featureflow.evaluate('my-feature-key').isOff(){
    //don't do something
  }
  //javascript
  if(featureflow.evaluate('my-feature-key').isOn()){
    //do something
  }
```

__You're done!__

Now you configure gradual rollouts, can add some user attributes for more control, define rollout strategies across environments, backup the UI logic using the javascript API or browse the reference docs for further information.