import {
  createLogger,
  DEBUG,
  stdSerializers,
  ConsoleFormattedStream,
} from "browser-bunyan";

export const log = createLogger({
  name: "Sample App",
  level: "debug",
  streams: [
    {
      level: DEBUG, // or use the string 'info'
      stream: new ConsoleFormattedStream(),
    },
  ],
  serializers: stdSerializers,
  src: false,
});

log.debug("initialized logger");
