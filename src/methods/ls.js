import * as fs from "fs";

const ls = async (path) => {
  if (fs.existsSync(path)) {
    fs.readdir(path, { withFileTypes: true }, (err, files) => {
      console.table(
        files
          .map((elem) => ({
            Name: elem.name,
            Type: elem.isDirectory() ? "Directory" : "File",
          }))
          .sort(function (a, b) {
            if (a.Type > b.Type) {
              return 1;
            }
            if (a.Type < b.Type) {
              return -1;
            }
            return 0;
          })
      );
      if (err) throw err;
    });
  } else {
    throw new Error("FS operation failed");
  }
};

export { ls };
