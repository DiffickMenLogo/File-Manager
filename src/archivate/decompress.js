import { createReadStream, createWriteStream } from "fs";
import { createBrotliDecompress } from "zlib";
import { pipeline } from "stream/promises";
import { resolve, parse } from "path";
import { isFile, isDirectory } from "../is/is.js";

export default async function decompress(path, newPath) {
  if (path && newPath) {
    try {
      const pathIsFile = await isFile(path);
      const newPathIsDirectory = await isDirectory(newPath);
      if (!pathIsFile) {
        console.log(`${path} is not a file`);
        return;
      }
      if (!newPathIsDirectory) {
        console.log(`${newPath} is not a directory`);
        return;
      }

      const srcFile = resolve(path);
      const { name } = parse(srcFile);
      const srcFileZip = resolve(newPath, name);
      const readableStream = createReadStream(srcFile);
      const writeableStream = createWriteStream(srcFileZip);
      const brotliDecompress = createBrotliDecompress();
      await pipeline(readableStream, brotliDecompress, writeableStream);
    } catch {
      console.log("Operation failed");
    }
  } else {
    console.log("Invalid input");
  }
}
