import { chdir } from "process";
import up from "./up.js";

//upgrade to hard drive root

export default function cd(currentPath, path) {
  const newPath = currentPath + "\\" + path;
  try {
    chdir(newPath);
    return newPath;
  } catch (err) {
    console.log("Operation failed");
    return currentPath;
  }
}
