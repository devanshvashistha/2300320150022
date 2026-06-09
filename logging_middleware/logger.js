const axios = require("axios");
require("dotenv").config();
console.log("TOKEN LENGTH =", process.env.ACCESS_TOKEN.length);
console.log(
  "FIRST 30 =",
  process.env.ACCESS_TOKEN.substring(0, 30)
);
console.log(
  "LAST 30 =",
  process.env.ACCESS_TOKEN.slice(-30)
);

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(
  process.env.ACCESS_TOKEN.substring(0, 30)
);

    console.log("Log Created:");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Logging Error:");

    if (error.response) {
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

module.exports = Log;