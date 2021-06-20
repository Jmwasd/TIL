// callback 지옥
// function person(word, callback) {
//   return setTimeout(() => {
//     console.log(word);
//     if (callback) {
//       callback();
//     }
//   }, 1000);
// }

// person("Hello", () => {
//   person("world", () => {
//     person("i am", () => {
//       person("min");
//     });
//   });
// });

//promise

function person(word) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(word);
      resolve();
    }, 1000);
  });
}

let test = person("Hello");
console.log(test);
// console.log(callback(test));
//   .then(() => person("world"))
//   .then(() => person("I am"))
//   .then(() => person("min"));
