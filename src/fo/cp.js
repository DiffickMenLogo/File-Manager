import { createReadStream, createWriteStream } from "fs";

export default function cp(currentPath, path, newPath) {
  const readbleStream = createReadStream(currentPath + "\\" + path);
  const writableStream = createWriteStream(currentPath + "\\" + newPath);

  readbleStream.on("data", (chunk) => {
    writableStream.write(chunk);
  });
  readbleStream.on("error", (err) => {
    console.log("Operation failed");
  });
  writableStream.on("error", (err) => {
    console.log("Operation failed");
  });
}
