import { unlink } from "fs";

export default function rm(currentPath, path) {
  const newPath = currentPath + "\\" + path;
  unlink(newPath, (err) => {
    if (err) {
      console.log("Operation failed");
    } else {
      console.log("File deleted");
    }
  });
}
