import * as fs from "fs";
import * as path from "path";

export enum LogLevels {
  INFO,
  WARNING,
  VERBOSE,
  ERROR,
}

class Logger {
  private static WriteToFile(text: string) {
    fs.writeFile(
      path.join(__dirname, "logs.txt"),
      "\r\n" + text,
      { flag: "a+" },
      (err) => {
        if (err) throw err;
      }
    );
  }

  private static GetTimestamp(): string {
    return new Date().toString();
  }
  public static log(level: LogLevels, text: string) {
    Logger.WriteToFile(
      `${LogLevels[level]}:: ${Logger.GetTimestamp()} ${text}`
    );
  }
}

export default Logger;
