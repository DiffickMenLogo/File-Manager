import { stat } from "fs/promises";
import { resolve } from "path";

export const isDirectory = async (path) => {
  try {
    const src = resolve(path);
    const stats = await stat(src);
    return stats.isDirectory();
  } catch {
    return false;
  }
};

export const isFile = async (path) => {
  try {
    const src = resolve(path);
    const stats = await stat(src);
    return stats.isFile();
  } catch {
    return false;
  }
};
