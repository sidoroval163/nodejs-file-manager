import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { createHash } = await import("node:crypto");

const hash = async (calculatedFile) => {
  const hash = createHash("sha256");
  fs.readFile(calculatedFile, "utf8", (err, data) => {
    if (err) {
      console.log("Operation failure chose another file or path");
      return;
    }
    hash.write(data);
    hash.end();
  });

  hash.on("readable", () => {
    const data = hash.read();
    if (data) {
      console.log(data.toString("hex"));
    }
  });
};

export { hash };
