const {contextBridge,ipcRenderer}=require('electron');
const fs=require('fs'),path=require('path');
const dir=ipcRenderer.sendSync('dir');
const bk=path.join(dir,'backups');
fs.mkdirSync(bk,{recursive:true});
const f=path.join(dir,'data.json');
contextBridge.exposeInMainWorld('kasherStore',{
  where:f,
  read:()=>fs.existsSync(f)?fs.readFileSync(f,'utf8'):null,
  write:t=>{
    fs.writeFileSync(f+'.tmp',t);fs.renameSync(f+'.tmp',f);
    const b=path.join(bk,'data-'+new Date().toISOString().slice(0,10)+'.json');
    const isNew=!fs.existsSync(b);fs.writeFileSync(b,t);
    if(isNew){const all=fs.readdirSync(bk).sort();all.slice(0,Math.max(0,all.length-30)).forEach(x=>fs.unlinkSync(path.join(bk,x)))}
  }
});
