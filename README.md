# Electron Tutorial

- [Internal Instructions](#internal-instructions)
- [How To Run The App](#how-to-run-the-app)

## Internal Instructions

### Step 1

#### Installation

##### Installing Node.js

[Install Node.js](https://nodejs.org/en/download/)

Node.js is the framework for everything you do with Electron.

`"As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications... ...many connections can be handled concurrently. Upon each connection the callback is fired, but if there is no work to be done, Node will sleep."`

A package manager called NPM is installed along with Node.js, it is also required for this project.

Once you have installed the latest version of Node.js, proceed to installing Electron.

##### Installing Electron

Electron is what allows you to make the app window (or multiple windows).

`"Electron uses Chromium and Node.js so you can build your app with HTML, CSS, and JavaScript."`

Using NPM, install Electron the following way.

You are on <span class="windows">Windows</span><span class="mac">macOS</span><span class="linux">a Linux based system</span>, so you will open a <span class="windows">command prompt</span><span class="mac">terminal</span><span class="linux">terminal</span> and navigate to wherever you want to start your project like this.

<kbd class="bg-dark text-white">cd path_to_folder</kbd>

Then, use this command to install Electron.

<kbd class="bg-dark text-white">npm install electron --save-dev</kbd>

This command utilizes the NPM package manager to install Electron in the currect directory.

Next, run this command.

<kbd class="bg-dark text-white">npm init</kbd>

This will initialize your project's settings.

You don't need to change anything, you can press enter and accept all the default values.

Now, open the file it created called <span class="text-primary">package.json</span>.

You can remove this line...

<kbd class="bg-dark text-white">"test": "echo \"Error: no test specified\" && exit 1"</kbd>

... and replace it with this...

<kbd class="bg-dark text-white">"start": "electron ."</kbd>

You just changed one of your project's settings.

You will get to run it soon enough, but first you have to tell the program what to do.

Create a new file in the same folder you were running the commands called <span class="text-primary">index.js</span>.

This is the file that will start your whole app.

Now open it up and paste this code inside.

<pre class="bg-dark text-white">const { app, BrowserWindow } = require("electron");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow () {
	// Create the browser window.
	win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	});

	// and load the index.html of the app.
	win.loadFile("index.html");

	// Remove the windows menubar.
	win.setMenu(null);

	// Open the DevTools.
	win.webContents.openDevTools();

	// Emitted when the window is closed.
	win.on("closed", () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		win = null;
	});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (win === null) {
		createWindow();
	}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.</pre>

Make sure you save the file.

Next, create a file called <span class="text-primary">index.html</span> and leave it blank for now.

Now, back in your <span class="windows">command prompt</span><span class="mac">terminal</span><span class="linux">terminal</span>, run this command to start your project!

<kbd class="bg-dark text-white">npm run start</kbd>

### Step 2

#### Documentation

##### Building A Custom Titlebar

Now that you've finished setting up your project, here's the <i>real</i> challenge.

Using Electron's documentation, remove the BrowserWindow's title bar, making it a <span class="text-primary">frameless window</span>.

[Open The Electron Docs](https://electronjs.org/docs/api/browser-window?q=titlebar#browserwindow)

Click the button above to open the Electron BrowserWindow documentation.

In order to gather the information you need to remove the titlebar, you will have to read through the documentation and find the information you need.

The documentation may even tell you more information about what you are trying to do.

Once you have done that, you can create your own custom titlebar and style it however you want using your knowledge of CSS.

Open up your <span class="text-primary">index.html</span> file and create a DIV that stretches all the way across the top of the window.

You can style this DIV however you want, just make sure it is visible.

When you have done that, add the extra CSS styles <span class="text-primary">-webkit-user-select: none;</span> and <span class="text-primary">-webkit-app-region: drag;</span> to the DIV.

These styles will prevent the user from selecting any text inside of that DIV and make the DIV a part of the titlebar respectively.

Now, if you run your project once more using the same command as before, you will be able to click and drag the DIV you added just like the built in window titlebar.

[Open Stack Overflow](https://stackoverflow.com/questions/35876939/frameless-window-with-controls-in-electron-windows)

## How To Run The App

### You need [Node.js](https://nodejs.org/) to run this.

To run this tutorial, either clone the repository if you know how to, or download the repository.

Once you've done that, unzip the folder and open a command prompt or terminal and navigate to where you saved the repository like this:

```
cd path_to_folder
```

Next, run this command to start it.

```
npm run start
```

If you have any problems running this, please leave an [issue](https://github.com/KyzaGitHub/Electron-Tutorial/issues).
