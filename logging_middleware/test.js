const Log = require("./logger");

async function runTest() {
  await Log(
    "backend",
    "info",
    "service",
    "Logging middleware test successful"
  );

  await Log(
    "backend",
    "error",
    "handler",
    "Sample error log"
  );

  await Log(
    "backend",
    "warn",
    "middleware",
    "Sample warning log"
  );
}

runTest();