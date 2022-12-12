import * as fs from "fs";

const add = async (path) => {
  if (!fs.existsSync(path)) {
    fs.appendFile(path, "", function (err) {
      if (err) throw err;
      console.log("File created");
    });
  } else {
    console.log("File already exists");
  }
};

export { add };
