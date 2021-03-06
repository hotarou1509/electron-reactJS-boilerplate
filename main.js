const { BrowserWindow, app } = require('electron');
const path = require('path');

function createWindow() {
	const win = new BrowserWindow({
		width: 1200,
		heigth: 800,
		backgroundColor: 'white',
		webPreferences: {
			nodeIntegration: false,
			worldSafeExecuteJavaScript: true,
			contextIsolation: true,
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	win.loadFile('./public/index.html');
}

require('electron-reload')(__dirname, {
	electron: path.join(__dirname, 'node__modules', '.bin', 'electron'),
});

app.whenReady().then(createWindow);
