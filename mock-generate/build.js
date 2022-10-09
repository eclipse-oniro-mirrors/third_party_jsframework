const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');
const os = require('os');
function compileMock() {
  const mockJsPath = path.join(__dirname, '..', './runtime/main/extend/systemplugin');
  let nodeDir = '';
  if (os.platform() === 'linux') {
    nodeDir = './node-v12.18.4-linux-x64/bin/node';
  } else {
    nodeDir = './node-v12.18.4-darwin-x64/bin/node';
  }
  
  const bat = spawn(`${path.join(__dirname, '..', nodeDir)} ${path.join(__dirname, '..','./node_modules/typescript/bin/tsc')} && 
  ${path.join(__dirname, '..', nodeDir)} ${path.join(__dirname, 'dist')}/main.js && 
  ${path.join(__dirname, '..', nodeDir)} ${path.join(__dirname, '..', './node_modules/eslint/bin/eslint.js')} -c .eslintrc --fix ${mockJsPath}/**/*.js`, {
    cwd: __dirname,
    shell: true
  });
  shellOutput(bat);
}

function shellOutput(bat) {
  bat.stdout.on('data', (data) => {
    const lines = `${data}`.split(/\r{0,1}\n/);
    if (lines) {
      lines.forEach(line => {
        if (line.length > 0) {
          console.log(line.toString());
        }
      });
    }
  });

  bat.stderr.on('data', (data) => {
    const lines = `${data}`.split(/\r{0,1}\n/);
    if (lines) {
      lines.forEach(line => {
        if (line.length > 0) {
          console.log(line.toString());
        }
      });
    }
  });
}

compileMock();
