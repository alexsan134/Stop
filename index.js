const {app, BrowserWindow} = require('electron')
const fs = require('fs');
const {dialog} = require('electron')
let win

function createWindow(){
    win = new BrowserWindow({width: 1000, height: 600,titleBarStyle: 'hiddenInset', frame : true, resizable: false,});
    win.loadFile("src/index.html");
    win.on('closed',() => {
        win == null;
    })
  
  //win.webContents.openDevTools();
}

app.on('ready', createWindow);
app.on('window-all-closed', () =>{
    if(process.platform !== "darwin"){
        app.quit()
    }
})

app.on('activate', () =>{
    if(win == true){
        createWindow();
    }
})

