import { rename } from "fs";

export default function rn(currentDir, path, newPath) {
  //rename file
  const newNewPath = currentDir + "\\" + path;
  const oldPath = currentDir + "\\" + newPath;
  rename(newNewPath, oldPath, (err) => {
    if (err) {
      console.log("Operation failed");
    } else {
      console.log("File renamed");
    }
  });
}
