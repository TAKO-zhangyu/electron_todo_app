// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, dialog} = require('electron')
const path = require('path')
const isDev = require("electron-is-dev");
const storage = require('electron-json-storage');


// var data = { // 仮のJSONデータの材料
//   site_name: "Sample site",
//   site_url: "http://sample.com"
// };
// storage.set('config.json', data, function (error) { // 書き出し（sample/config.jsonとディレクトリを指定することも可能）
//   if (error) throw error;
// });
// storage.get('config.json', function(error, data) { // 読み込みしてHTMLに書き出す
//   if (error) throw error;
//   document.getElementById("site-name").innerHTML = data.site_name;
//   document.getElementById("site-url").innerHTML = data.site_url;
// });

// function sample2() {
//   // 保存
//   storage.set('aisatsu', 'Helloworld')
//   console.log("保存っす")
// }

// function sample2() {
//   // 取り出し
//   const value = storage.get('aisatsu')
//   console.log("取り出しっす")
// }

// function sample2() {
//   // 削除
// storage.delete('aisatsu')
// console.log("削除っす")
// }

function createWindow () {
  ipcMain.handle('open-dialog', async (_e, _arg) => {
    return dialog
      // ファイル選択ダイアログを表示する
      .showOpenDialog(mainWindow, {
        properties: ['openFile'],
      })
      .then((result) => {
        // キャンセルボタンが押されたとき
        if (result.canceled) return '';

        // 選択されたファイルの絶対パスを返す
        return result.filePaths[0];
      });
  });

 // 保存
 storage.set('aisatsu', 'Helloworld')
 console.log("保存っす")
 console.log(storage)

 // 取り出し
 storage.get('aisatsu')
 console.log("取り出しっす")
 console.log(storage)
 // Create the browser window.
 const mainWindow = new BrowserWindow({
   width: 800,
   height: 600,
   webPreferences: {
     preload: path.join(__dirname, 'preload.js'),
     nodeIntegration: true,
     contextIsolation: false,
   }
 })

 // and load the index.html of the app.
 mainWindow.loadURL(
   isDev
     ? "http://localhost:3000"
     : `file://${path.join(__dirname, "../build/index.html")}`
 );

 // Open the DevTools.
 // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
 createWindow()
 
 app.on('activate', function () {
   // On macOS it's common to re-create a window in the app when the
   // dock icon is clicked and there are no other windows open.
   if (BrowserWindow.getAllWindows().length === 0) createWindow()
 })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
 if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.