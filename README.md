#Playable demo
http://bic.cat/webs/lineup/


#How I created it and why

##Using a boilerplate
It gives you everything. Ok, let's clarify this.
It creates a draft of a project, the configuration, an structure...etc It gives the chance to follow what some other people does. 
So, if you get in trouble with something, you will probably find the solution or some guide about that of some other user experience.
Also gives the chance to use the last community tools, design patterns...and maybe non-grumpy cat tricks.

On the other hand, if someone want to collaborate with it, this geek will have at least some clue about the whole project, structure, why it does...

Lastly, of course, if you want to use a boilerplate you have to know why it does that, is structed like, why config like...

##Using Yeoman
Yeah, it's nice, heavy community n the guy looks awesome (it reminds me Batman's butler with moustache).
It mainly uses Grunt, Bower and npm. Also has some auto-magical tasks like watch or build...or auto test.

I've also taken a look to other boilerplates, but as always I come back with this butler.

##TwBootstrap with sass
It's simply cool. As said, another kinda boilerplate full of structures n helpers.

##About the code
I just created a dynamic controller to have to control of all. Well, all...this app does not do so much at least.
I tried to split all the logics. That's great AngularJS helps so much with DI and spliting logics.
The config constant helps if we want to deploy this script in other environment or some like. A grunt task could change parameters of this one for instance.
Also wanted to follow JSHint and https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml as always.

##About testing
There is not complicate stuff over here. Anyway, if this has to be maintable it would need some tests.
I would use some unit-tests for the directives and maybe services.
On the other hand also some EndToEnd ones with Protactor.

Offtopic: About my test approach read http://david.heinemeierhansson.com/2014/tdd-is-dead-long-live-testing.html (just from an awesome coder)

##I wanna use this code
You just have to follow this guidelines: https://github.com/yeoman/generator-angular
Or maybe...
```
npm install && bower install
```
and then to lunch it
```
grunt serve
```


#Line-Up project specification:

The task is to create a simple javascript widget that lists upcoming events in London. 

There are only a few requirements:

```
x The user must be able to filter for events happing today
x The user must be able to filter for events happening in the next 7 days
x Only display events happening in London.
x AngularJS must be used to build the app.
```

To get event data for the app, use our API, the documentation for which is at http://XXX.com/. The access key for your account is d95e605e18384209b386773c5468b15e

It's up to you to present the event data as you see fit however we’re not too concerned about the styling. For an example of how we have done it previously, see http://www.london24.com/what-s-on#/

Once you've completed the task, push the code up to github. Ideally it would be great if you could host the project somewhere and send us a link to it.

Good luck!