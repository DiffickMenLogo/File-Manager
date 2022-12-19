import { EOL, cpus, userInfo, arch } from "os";

export default function os(arg) {
  if (arg) {
    switch (arg) {
      case "--EOL":
        console.log(JSON.stringify(EOL));
        break;
      case "--cpus":
        const cpusInfo = cpus().map(({ model, speed }) => {
          return { model, frequency: `${(speed / 1000).toFixed(1)} GHz` };
        });
        console.table(cpusInfo);
        break;
      case "--homedir":
        console.log(JSON.stringify(userInfo().homedir));
        break;
      case "--username":
        console.log(JSON.stringify(userInfo().username));
        break;
      case "--architecture":
        console.log(arch());
        break;
      default:
        console.log("Invalid input");
    }
  } else {
    console.log("Invalid input");
  }
}
