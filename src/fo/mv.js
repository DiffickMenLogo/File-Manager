import { createReadStream, createWriteStream } from "fs";

export default function mv(currentPath, path, newPath) {
  //move file
  const newNewPath = currentPath + "\\" + path;
  const oldPath = currentPath + "\\" + newPath;
  const readStream = createReadStream(oldPath);
  const writeStream = createWriteStream(newNewPath);

  readStream.on("data", (chunk) => {
    writeStream.write(chunk);
  });

  readStream.on("error", (err) => {
    console.log("Operation failed");
  });
  writeStream.on("error", (err) => {
    console.log("Operation failed");
  });
}
