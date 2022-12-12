import * as fs from "fs";
import * as zlib from "zlib";

const compress = (readFile, compressedFileDestination) => {
  const readStream = fs.createReadStream(readFile);
  readStream.on("error", function (err) {
    console.log("wrong path to compressed file");
  });
  const writeStream = fs.createWriteStream(
    compressedFileDestination.endsWith("\\")
      ? compressedFileDestination + readFile.split("\\").slice(-1)[0] + ".br"
      : compressedFileDestination +
          "\\" +
          readFile.split("\\").slice(-1)[0] +
          ".br"
  );
  writeStream.on("error", function (err) {
    console.log(
      "wrong place for move compressed file or you don't have permissions"
    );
  });
  const brotli = zlib.createBrotliCompress();

  // Pipe the read and write operations with brotli compression
  const stream = readStream.pipe(brotli).pipe(writeStream);

  stream.on("finish", () => {
    console.log("Done compressing");
  });
};
export { compress };
