const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin, //input은 Readable 스트림을 읽게 해주는 프로퍼티고 이 옵션은 필수
  output: process.stdout,
});

rl.question("What do you think of Node.js? ", (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
