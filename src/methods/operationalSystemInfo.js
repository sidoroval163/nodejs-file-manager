import * as os from "node:os";
const operationalSystemInfo = async (osCommand) => {
  switch (osCommand.split("--")[1]) {
    case "EOL":
      console.log(JSON.stringify(os.EOL));
      break;
    case "cpus":
      console.log(os.cpus());
      break;
    case "homedir":
      console.log(os.homedir());
      break;
    case "username":
      console.log(os.hostname());
      break;
    case "architecture":
      console.log(os.arch());
      break;
    default:
      console.log(
        "please enter a valid command after os --EOL --cpus --homedir --username --architecture"
      );
  }
};

export { operationalSystemInfo };
