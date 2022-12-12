import * as fs from "fs";
const cd = (newDirectory) => {
  if (newDirectory) {
    return fs.existsSync(newDirectory.replace("[\\\\]"), (err) => {
      if (err) {
        console.log("The path doest exist");
      }
    });
  }
};

export { cd };
