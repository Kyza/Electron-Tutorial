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

$("#docs-button").on("click", () => {
  dialog.showMessageBox(remote.getCurrentWindow(), {
		"title": "Please Wait",
    "message": "Your browser will open with the documentation page for Electron."
  });
  opn("https://electronjs.org/docs/api/browser-window?q=titlebar#browserwindow");
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
