import { up } from "./methods/up.js";
import { cd } from "./methods/cd.js";
import { ls } from "./methods/ls.js";
import { cat } from "./methods/cat.js";
import { add } from "./methods/add.js";
import { rn } from "./methods/rn.js";
import { cp } from "./methods/cp.js";
import { mv } from "./methods/mv.js";
import { rm } from "./methods/rm.js";
import { operationalSystemInfo } from "./methods/operationalSystemInfo.js";
import { hash } from "./methods/hash.js";
import { compress } from "./methods/compress.js";
import { decompress } from "./methods/decompress.js";

const args = process.argv.slice(2);
let currentDirectory = args[1];
const echoInput = (chunk) => {
  let username = args[0];

  const chunkStringified = chunk.toString().trim();

  switch (chunkStringified.split(" ")[0]) {
    case ".exit":
      process.stdout.write(
        `Thank you for using File Manager, ${username}, goodbye!`
      );
      process.exit(0);
    case "-list":
      console.log(`Here is the list of available commands`);
      console.log(`up  -  Go upper from current directory`);
      console.log(
        `cd path_to_directory -  Go to dedicated folder from current directory (path_to_directory can be relative or absolute)`
      );
      console.log(
        `ls  -  Print in console list of all files and folders in current directory`
      );
      console.log(`cat  -  Read file and print it's content`);
      console.log(`add  -  Create empty file in current working directory`);
      console.log(`rn  -  Just rename file`);
      console.log(
        `cp  -  Copy file to new directory as example cp path_to_file path_to_new_directory`
      );
      console.log(`os  -  commands for os info`);
      break;
    case "up":
      currentDirectory = up(currentDirectory);
      break;
    case "cd":
      let newDirectory = chunkStringified.split(" ")[1];
      if (cd(newDirectory)) {
        currentDirectory = newDirectory;
      } else {
        console.log("This path does not exist");
      }
      break;
    case "ls":
      ls(currentDirectory);
      break;
    case "cat":
      let fileToRead = chunkStringified.split(" ")[1];
      cat(fileToRead);
      break;
    case "add":
      let fileToCreate = chunkStringified.split(" ")[1];
      if (fileToCreate) {
        add(`${currentDirectory}\\${fileToCreate}`);
      } else {
        console.log("This path does not exist");
      }
      break;
    case "rn":
      let fileToRename = chunkStringified.split(" ")[1];
      let newFileName = chunkStringified.split(" ")[2];
      if (fileToRename && newFileName) {
        rn(fileToRename, newFileName);
      } else {
        console.log("Please enter a valid path");
      }
      break;
    case "cp":
      let fileToCopy = chunkStringified.split(" ")[1];
      let pathToCopy = chunkStringified.split(" ")[2];
      if (fileToCopy && pathToCopy) {
        cp(fileToCopy, pathToCopy);
      } else {
        console.log("Please enter a valid path");
      }
      break;
    case "mv":
      let fileToMove = chunkStringified.split(" ")[1];
      let pathToMove = chunkStringified.split(" ")[2];
      if (fileToMove && pathToMove) {
        mv(fileToMove, pathToMove);
      } else {
        console.log("Please enter a valid path");
      }
      break;
    case "rm":
      let fileToDelete = chunkStringified.split(" ")[1];
      if (fileToDelete) {
        rm(fileToDelete);
      } else {
        console.log("Please enter a valid path");
      }
      break;
    case "os":
      operationalSystemInfo(chunkStringified);
      break;
    case "hash":
      let fileToHash = chunkStringified.split(" ")[1];
      if (fileToHash) {
        hash(fileToHash);
      } else {
        console.log("Please enter a valid path");
      }
      break;
    case "compress":
      let fileToCompress = chunkStringified.split(" ")[1];
      let pathToNewFile = chunkStringified.split(" ")[2];
      if (fileToCompress && pathToNewFile) {
        compress(fileToCompress, pathToNewFile);
      } else {
        console.log("Please enter a valid path");
      }
    case "decompress":
      let fileToDecompress = chunkStringified.split(" ")[1];
      let pathToDecompressedFile = chunkStringified.split(" ")[2];
      if (fileToDecompress && pathToDecompressedFile) {
        decompress(fileToDecompress, pathToDecompressedFile);
      } else {
        console.log("Please enter a valid path");
      }
      break;
    default:
      console.log(`Invalid input - type -list for list of available commands`);
  }
  console.log(`You are currently in, ${currentDirectory}`);
};

process.stdin.on("data", echoInput);
