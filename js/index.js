var xmlreader = require("xmlreader");
var fs = require("fs");
var fl = require('./flash');

function unique(arr) {
  var result = [];
  var hash = {};
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    var key = (typeof arr[i]) + arr[i];
    if (!hash[key]) {
      result.push(arr[i]);
      hash[key] = true;
    }
  }
  return result;
}

function show() {
  console.log("eeeeee");
  let ImageFile = document.getElementById('file1');
  if (ImageFile.files && ImageFile.files[0]) {
    let file = ImageFile.files[0];
    console.log(file.path);

  fs.readFile(file.path, 'utf8',(err, content)=> {
    if (err) throw err;
    console.log(content);

    xmlreader.read(content,(err, res)=> {
      if(err) return console.log(err);
      // console.log(res.data);
      // console.log(res.data.text());
      console.log("Hello World");
      // console.log(res.data.program.count());
      // console.log(res.data.program.at(0).attributes().filename);
      var flashImage = new Array();
      var node = res.data.program;
      for (let i = 0,j = 0; i < node.count(); i++) {
        if (node.at(i).attributes().filename !== "") {
          // console.log(node.at(i).attributes().filename);
          flashImage[j] = node.at(i).attributes().filename;
          j++;
        }
      }
      console.log(unique(flashImage));
    });
  });
 }
}

function flashgo() {
  console.log('FIXME: flash it');
}

function show_main() {
  console.log("let's begin");

  let ff = document.getElementById('file1');
  ff.onchange = show;

  let flash = document.getElementById('flash');
  flash.onchange = fl.flash();
}

// fl.flash();
//Main Function
show_main();
