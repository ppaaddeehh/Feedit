//renderer.js
const ipc = require('electron').ipcRenderer;
ipc.send('hello', 'a string', 10);
ipc.on('asynReply', (event, messages) => {
    console.log(event, messages);
});

document.getElementById('file').onchange = function () {
    console.log(document.getElementById('file').files[0].path);
    ipc.send('directorySelected', document.getElementById('file').files[0].path);
};
