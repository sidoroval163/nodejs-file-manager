import { argv, env } from "process";
import { fork } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = () => {
  let startingDirectory = env.USERPROFILE;
  let userName = argv
    .filter((argElem) => argElem.includes("--"))[1]
    .split("=")[1];

  console.log(`Welcome to the File Manager, ${userName}!`); // Приветствуем пользователя исходя из заданных параметров
  console.log(`You are currently in, ${startingDirectory}`); // Показываем пользователю в какой папке он находится
  const inputListener = fork(`${__dirname}/inputListener.js`, [
    userName,
    startingDirectory,
  ]);
  process.on("SIGINT", function () {
    process.stdout.write(
      `Thank you for using File Manager, ${userName}, goodbye!`
    ); // Сообщение при выходе из программы
  });
  inputListener.on("message", function (m) {
    console.log("Parent process received:", m);
  });
};

root();
