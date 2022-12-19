import { createReadStream, createWriteStream } from "fs";
import { createBrotliCompress } from "zlib";
import { pipeline } from "stream/promises";
import { resolve, parse } from "path";
import { isFile, isDirectory } from "../is/is.js";

export default async function compress(path, newPath) {
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
      const { base } = parse(srcFile);
      const srcFileZip = resolve(newPath, `${base}.br`);
      const readableStream = createReadStream(srcFile);
      const writeableStream = createWriteStream(srcFileZip);
      const brotliCompress = createBrotliCompress();
      await pipeline(readableStream, brotliCompress, writeableStream);
    } catch (error) {
      console.log("Operation failed");
    }
  } else {
    console.log("Invalid input");
  }
}
