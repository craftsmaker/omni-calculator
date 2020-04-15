const {app, BrowserWindow, Menu} = require("electron");

function createWindow() {

    let mainWindow = new BrowserWindow({ 
        width: 400, 
        height: 700,
        icon: ""
    });
   

    const isDev = require("electron-is-dev");
    const path = require("path");

    mainWindow.loadURL(
        isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );

    mainWindow.on("closed", () => (mainWindow = null));
    
}

Menu.setApplicationMenu(null);
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
    app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});