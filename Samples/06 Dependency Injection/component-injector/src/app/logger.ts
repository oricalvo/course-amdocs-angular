export class Logger {
  static enabled: boolean = true;

  // static log(message: string) {
  //   if(!Logger.enabled) {
  //     return;
  //   }
  //
  //   console.log(message);
  // }

  static get log() {
    if(!Logger.enabled) {
      return noop;
    }

    return console.log.bind(console);
  }
}

function noop() {
}
