import { createReadStream } from "fs";
export default function cat(currentPath, path) {
  const newPath = currentPath + "\\" + path;
  const readStream = createReadStream(newPath);
  readStream.on("data", (chunk) => {
    console.log(chunk.toString());
    readStream.close();
  });
  readStream.on("error", (err) => {
    console.log("Operation failed");
  });
}
