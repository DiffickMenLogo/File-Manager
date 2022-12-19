import { createInterface } from "readline";
import { fileURLToPath } from "url";
import { dirname } from "path";
import up from "./nwd/up.js";
import cd from "./nwd/cd.js";
import ls from "./nwd/ls.js";
import cat from "./fo/cat.js";
import add from "./fo/add.js";
import rn from "./fo/rn.js";
import mv from "./fo/mv.js";
import cp from "./fo/cp.js";
import rm from "./fo/rm.js";
import os from "./os/os.js";
import hash from "./hash/hash.js";
import compress from "./archivate/compress.js";
import decompress from "./archivate/decompress.js";

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
    } else if (answer.startsWith("cat")) {
      const path = answer.split(" ")[1];
      cat(currentDir, path);
    } else if (answer.startsWith("add")) {
      const path = answer.split(" ")[1];
      add(currentDir, path);
    } else if (answer.startsWith("rn")) {
      const path = answer.split(" ")[1];
      const newPath = answer.split(" ")[2];
      rn(currentDir, path, newPath);
    } else if (answer.startsWith("mv")) {
      const path = answer.split(" ")[1];
      const newPath = answer.split(" ")[2];
      mv(currentDir, path, newPath);
    } else if (answer.startsWith("cp")) {
      const path = answer.split(" ")[1];
      const newPath = answer.split(" ")[2];
      cp(currentDir, path, newPath);
    } else if (answer.startsWith("rm")) {
      const path = answer.split(" ")[1];
      rm(currentDir, path);
    } else if (answer.startsWith("os")) {
      const arg = answer.split(" ")[1];
      os(arg);
    } else if (answer.startsWith("hash")) {
      const path = answer.split(" ")[1];
      hash(path);
    } else if (answer.startsWith("compress")) {
      const path = answer.split(" ")[1];
      const newPath = answer.split(" ")[2];
      compress(path, newPath);
    } else if (answer.startsWith("decompress")) {
      const path = answer.split(" ")[1];
      const newPath = answer.split(" ")[2];
      decompress(path, newPath);
    } else {
      console.log(`Invalid input`);
    }
    console.log(`You are currently in ${currentDir}`);
    menu();
  });
};

menu();
