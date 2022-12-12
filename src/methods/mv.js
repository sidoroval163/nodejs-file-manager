import * as fs from "fs";

const mv = async (fileToMove, placeToMove) => {
  const readStream = fs.createReadStream(fileToMove);
  readStream.on("error", function (err) {
    console.log("wrong path to move file");
  });
  const writeStream = fs.createWriteStream(
    placeToMove.endsWith("\\")
      ? placeToMove + fileToMove.split("\\").slice(-1)[0]
      : placeToMove + "\\" + fileToMove.split("\\").slice(-1)[0]
  );
  writeStream.on("error", function (err) {
    console.log("wrong place to move file or you don't have permissions");
  });
  readStream.on("close", function () {
    fs.unlink(fileToMove, (err) => {
      if (err) {
        console.log("Something went wrong");
      }
    });
  });
  readStream.pipe(writeStream);
};
export { mv };
