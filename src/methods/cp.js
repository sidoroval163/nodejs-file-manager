import * as fs from "fs";

const cp = async (fileToCopy, placeToCopy) => {
  const readStream = fs.createReadStream(fileToCopy);
  readStream.on("error", function (err) {
    console.log("wrong path to copy file");
  });
  const writeStream = fs.createWriteStream(
    placeToCopy.endsWith("\\")
      ? placeToCopy + fileToCopy.split("\\").slice(-1)[0]
      : placeToCopy + "\\" + fileToCopy.split("\\").slice(-1)[0]
  );
  writeStream.on("error", function (err) {
    console.log("wrong place to copy file or you don't have permissions");
  });
  readStream.pipe(writeStream);
};
export { cp };
