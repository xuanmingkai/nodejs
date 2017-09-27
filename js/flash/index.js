// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var sh = require("shelljs");

function flash() {
  console.log("flash gogogo");
  sh.echo("Hello World");
  var path = sh.which('git');
  if (!path) {
    sh.echo('Sorry, this script requires git');
    sh.exit(1);
  } else {
    console.log(path.toString());
  }
  sh.exec('fastboot', (code, stdout, stderr) => {
    // console.log('Exit code:', code);
    console.log('Program output:', stdout);
    // console.log('Program stderr:', stderr);
  });
}

function flash2() {
  console.log("flash2 eeeee");
}

module.exports = {
  flash,
  flash2
}
