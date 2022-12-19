import { resolve } from "path";
import { createHash } from "crypto";
import { readFile } from "fs/promises";

export default async function hash(path) {
  if (path) {
    try {
      const content = await readFile(resolve.path);
      const hash = createHash("sha256").update(content).digest("hex");
      console.log(hash);
    } catch (err) {
      console.log("Operation failed");
    }
  } else {
    console.log("Invalid input");
  }
}
