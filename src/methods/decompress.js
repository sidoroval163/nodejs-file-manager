import * as fs from "fs";
import * as zlib from "zlib";

const decompress = (readFile, decompressedFileDestination) => {
  const readStream = fs.createReadStream(readFile);
  readStream.on("error", function (err) {
    console.log("wrong path to compressed file");
  });
  const writeStream = fs.createWriteStream(
    decompressedFileDestination.endsWith("\\")
      ? decompressedFileDestination +
          readFile.split("\\").slice(-1)[0].slice(0, -3)
      : decompressedFileDestination +
          "\\" +
          readFile.split("\\").slice(-1)[0].slice(0, -3)
  );
  writeStream.on("error", function (err) {
    console.log(
      "wrong place for move decompressed file or you don't have permissions"
    );
  });
  const brotli = zlib.createBrotliDecompress();

  const stream = readStream.pipe(brotli).pipe(writeStream);

  stream.on("finish", () => {
    console.log("Done decompressing");
  });
};
export { decompress };
