# Local Data Context


The app currently does not work, to make it work we need to do the following changes:-

Inside <code>src/localDataContext</code>, create context with name
<code>LocalDataContext</code> and export it, so its available in all the files its being imported in.

Uncomment the relevant code in <code>src/components/App.js</code> and pass the data to value prop.

The app will render nothing on your browsers since you don't have any value in localstorage.

Open dev tools in chrome
windows: control+shift+j
Mac: command+option+j

Navigate to console and paste this
<code>window.localstorage.setItem('value','Hello world')</code>
You will see "Hello world" on your screen if you followed the instructions.

