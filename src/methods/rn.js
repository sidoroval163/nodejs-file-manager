import * as fs from "fs";

const rn = async (excitingName, newName) => {
  if (fs.existsSync(excitingName) && !fs.existsSync(newName)) {
    fs.rename(excitingName, newName, (err) => {
      if (err) {
        console.log("something went wrong");
      }
    });
  } else {
    console.log(
      "File system error, new filename already in use or you enter incorrect filename for renaming"
    );
  }
};

export { rn };
