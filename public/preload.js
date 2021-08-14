const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld(
    "api", {
        send: (channel, args) => {
            // whitelist channels
          //  let validChannels = ["toMain"];
         //   if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, args);
         //   }
        },
        receive: (channel, func) => {
           // let validChannels = ["fromMain"];
           // if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender`
                ipcRenderer.on(channel, (event, ...args) => func(...args));
          //  }
        },
        invoke: (channel, args, callback) => {
            ipcRenderer.invoke(channel, args).then((result) => callback(result));
        }
    }
);