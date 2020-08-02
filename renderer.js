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

var windowTopBar = document.createElement('div');
windowTopBar.style.width = '100%';
windowTopBar.style.height = '32px';
windowTopBar.style.position = 'absolute';
windowTopBar.style.top = windowTopBar.style.left = 0;
windowTopBar.style.webkitAppRegion = 'drag';
windowTopBar.style.display = 'flex';
windowTopBar.style.flexDirection = 'row';

closeicon = document.createElement('div');
closeicon.style.margin = '5px 5px 5px 5px';
closeicon.style.width = '12px';
closeicon.style.height = '12px';
closeicon.style.backgroundColor = 'red';
closeicon.style.borderRadius = '100%';

minicon = document.createElement('div');
minicon.style.margin = '5px 5px 5px 5px';
minicon.style.width = '12px';
minicon.style.height = '12px';
minicon.style.backgroundColor = 'yellow';
minicon.style.borderRadius = '100%';

minicon = document.createElement('div');
minicon.style.margin = '5px 5px 5px 5px';
minicon.style.width = '12px';
minicon.style.height = '12px';
minicon.style.backgroundColor = 'yellow';
minicon.style.borderRadius = '100%';

fsicon = document.createElement('div');
fsicon.style.margin = '5px 5px 5px 5px';
fsicon.style.width = '12px';
fsicon.style.height = '12px';
fsicon.style.backgroundColor = 'green';
fsicon.style.borderRadius = '100%';

document.body.appendChild(windowTopBar);
windowTopBar.appendChild(closeicon);
windowTopBar.appendChild(minicon);
windowTopBar.appendChild(fsicon);
