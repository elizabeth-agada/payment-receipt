import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Use preload instead of enabling remote
      contextIsolation: true, // Recommended for security
      // enableRemoteModule: false // Make sure this is set to false
    },
  });

  mainWindow.loadURL('http://localhost:5173'); // or load your Vite-built file
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('some-event', (arg) => {
  console.log(arg); // Use the arg parameter
  // Handle events here
});
