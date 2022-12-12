import * as fs from "fs";

const rm = async (pathToRemove) => {
  if (fs.existsSync(pathToRemove)) {
    fs.unlink(pathToRemove, (err) => {
      if (err) console.log("Sorry i cant remove this");
    });
  } else {
    console.log("This file does not exist");
  }
};

export { rm };
