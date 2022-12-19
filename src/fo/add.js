import { writeFile } from "fs";

export default function add(currentPath, path) {
  const newPath = currentPath + "\\" + path;
  writeFile(newPath, "", (err) => {
    if (err) {
      console.log("Operation failed");
    } else {
      console.log("File created");
    }
  });
}
