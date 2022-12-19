import { readdir } from "fs";

export default async function ls(currentPath) {
  try {
    await readdir(currentPath, { withFileTypes: true }, (err, files) => {
      if (err) {
        console.log(err);
      } else {
        files.forEach((file) => {
          if (file.isDirectory()) {
            file.type = "directory";
          } else if (file.isFile()) {
            file.type = "file";
          } else {
            file.type = "unknown";
          }
        });
        files.sort((a, b) => {
          if (a.type < b.type) {
            return -1;
          } else if (a.type > b.type) {
            return 1;
          } else {
            return 0;
          }
        });
        console.table(files, ["name", "type"]);
      }
    });
  } catch (err) {
    console.log("Operation failed");
  }
}
