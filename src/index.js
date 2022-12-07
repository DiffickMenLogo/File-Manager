import { createInterface } from "readline";

const user = process.env.username || "Anonymous";
console.log(`Welcome to the File Manager, ${user}!`);

process.on("exit", function () {
  console.log(`\n Thank you for using File Manager, ${user}, goodbye!`);
});

var rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = function () {
  rl.question("Enter Command:  ", function (answer) {
    if (answer == "exit") {
      return rl.close();
    }
    console.log(`you answer: ${answer}`);
    menu();
  });
};

menu();
