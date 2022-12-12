import * as fs from "fs";

import { stdout } from "node:process";

const cat = async (path) => {
  if (path) {
    const fileStream = fs.createReadStream(path);
    fileStream.on("error", function (err) {
      console.log("wrong file");
    });
    fileStream.pipe(stdout);
  } else {
    console.log("Enter a valid path to file");
  }
};

export { cat };
