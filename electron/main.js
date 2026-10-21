const {app,BrowserWindow,Menu,ipcMain}=require('electron');
const path=require('path');
ipcMain.on('dir',e=>{e.returnValue=path.join(app.getPath('documents'),'KasherAlMahal')});
function create(){
  const w=new BrowserWindow({width:1280,height:800,autoHideMenuBar:true,title:'كاشير المحل',
    webPreferences:{preload:path.join(__dirname,'preload.js'),sandbox:false,contextIsolation:true}});
  Menu.setApplicationMenu(null);
  w.webContents.session.setPermissionRequestHandler((wc,perm,cb)=>cb(perm==='media'));
  w.loadFile(path.join(__dirname,'..','www','index.html'));
}
app.whenReady().then(create);
app.on('window-all-closed',()=>app.quit());
