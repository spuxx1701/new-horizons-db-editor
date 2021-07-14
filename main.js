const { app, BrowserWindow } = require('electron')
const path = require('path')

app.whenReady().then(() => {
    createWindow();
})

app.on('window-all-closed', function () {
    app.quit()
});

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}