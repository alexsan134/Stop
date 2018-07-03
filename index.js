const {app, BrowserWindow} = require('electron')
const path = require('path');
const {dialog} = require('electron')
let win

function createWindow(){
    win = new BrowserWindow({
        width: 1050, 
        height: 650,
        titleBarStyle: 'hiddenInset',
        frame : true, 
        resizable: false,
        show : false,
        icon: 'src/img/logo.icns',
        title : "Stop"
    });
    
    win.loadFile("index.html");
    win.on('closed',() => {
        win == null;
    })
    win.once('ready-to-show', () => {
        win.show()
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

