function winOpen() {
  win = window.open("kong.html", "_blank", "width=300px height=1000px");
}

function winMsg(msg) {
  win.document.querySelector("p").innerText = msg;
}

function winClose() {
  win.close();
}

// jQuery(document).redy(function ($) {
//   $("body").prepend("<h1>hello</h1>");
// });
$(document).ready(function () {
  $("body").append("<p>Test</p>");
});

// console.log($('li').length);
var li = $("li");
console.log($(li[1]).css("color", "red"));
console.log(li);
console.log($("li"));
console.log($(li[1]));
var d = document.getElementsByTagName("li");
console.log(d);
var o = document.getElementById("odd");
console.log(o);
console.log($(o));
console.log();

var bd = document.getElementsByTagName("body");

function traverse(target, callback) {
  if (target.nodeType === 1) {
    if (target.nodeName === "A") {
      callback(target);
    }
    var c = target.childNodes;
    for (var i = 0; i < c.length; i++) {
      traverse(c[i], callback);
    }
  }
}

traverse(bd[0], con);

function con(e) {
  console.log(e);
}

// $("#box1").replaceWith($("#box3").clone());

const kan = {
  as: function () {
    console.log(1)
  }
}