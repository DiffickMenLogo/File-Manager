import { chdir } from "process";

export default function up(path) {
  const pathArr = path.split("\\");
  const newPath = pathArr.slice(0, pathArr.length - 1).join("\\");
  try {
    chdir(newPath);
    return newPath;
  } catch (err) {
    console.log("Operation failed");
  }
}
