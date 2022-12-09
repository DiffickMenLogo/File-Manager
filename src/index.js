import { createInterface } from "readline";
import { fileURLToPath } from "url";
import { dirname } from "path";
import up from "./nwd/up.js";
import cd from "./nwd/cd.js";
import ls from "./nwd/ls.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
let currentDir = __dirname;
const rootDir = __dirname.split("\\")[0];

const user = process.env.username || "Anonymous";
console.log(`Welcome to the File Manager, ${user}!`);
console.log(`You are currently in ${currentDir}`);

process.on("exit", function () {
  console.log(`\nThank you for using File Manager, ${user}, goodbye!`);
});

var rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = function () {
  rl.question("", function (answer) {
    if (answer === ".exit") {
      return rl.close();
    } else if (answer === "up") {
      if (currentDir === rootDir) {
        console.log("You are already at the root directory");
      } else {
        currentDir = up(currentDir);
      }
    } else if (answer.startsWith("cd")) {
      const path = answer.split(" ")[1];
      if (path === "..") {
        if (currentDir === rootDir) {
          console.log("You are already at the root directory");
        } else {
          currentDir = up(currentDir);
        }
      } else {
        currentDir = cd(currentDir, path);
      }
    } else if (answer.startsWith("ls")) {
      ls(currentDir);
    } else {
      console.log(`Invalid input`);
    }
    console.log(`You are currently in ${currentDir}`);
    menu();
  });
};

menu();
