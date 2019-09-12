// function b() {
//     var myvar;
//     console.log(myvar);
// }

// function a() {
//      myvar =2;
//     console.log(myvar);
//     b();
//     c();
//     function c() {
//      myvar = 3;
//      jooo=4;
//     }
//     console.log(myvar);
// }
// a();
// console.log(myvar);
// console.log(jooo);

var add = (function () {
    var counter = 0;
    return function plus () {counter += 1; return counter}
  });
  var innerFunction = add();
  add();
  add();
  add();
  console.log(add()());
  console.log(innerFunction());
  innerFunction();
  console.log(innerFunction());

