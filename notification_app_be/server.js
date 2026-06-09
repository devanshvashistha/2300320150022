const express = require("express");

const app = express();

app.use(express.json());

const notificationRoutes = require("./routes/notificationRoutes");

app.use("/api/v1/notifications", notificationRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});