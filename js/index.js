const {
  remote
} = require("electron");

const dialog = remote.dialog;

const opn = require("opn");
var os = require('os');
var platform = os.platform();

$("#nodejs-install").on("click", () => {
  dialog.showMessageBox(remote.getCurrentWindow(), {
		"title": "Please Wait",
    "message": "Your browser will open with the download page for the latest version of Node.js."
  });
  opn("https://nodejs.org/en/download/");
});

$("#titlebar-docs-button").on("click", () => {
  dialog.showMessageBox(remote.getCurrentWindow(), {
		"title": "Please Wait",
    "message": "Your browser will open with the documentation page for Electron."
  });
  opn("https://electronjs.org/docs/api/browser-window?q=titlebar#browserwindow");
});

$("#buttons-stackoverflow-button").on("click", () => {
  dialog.showMessageBox(remote.getCurrentWindow(), {
		"title": "Please Wait",
    "message": "Your browser will open with the article."
  });
  opn("https://stackoverflow.com/questions/35876939/frameless-window-with-controls-in-electron-windows");
});

if (platform == "win32") {
	$(".mac").hide();
	$(".linux").hide();
} else if (platform == "darwin") {
	$(".windows").hide();
	$(".linux").hide();
} else {
	$(".windows").hide();
	$(".mac").hide();
}
