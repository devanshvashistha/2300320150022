const express = require("express");
const router = express.Router();

const {
  getAllNotifications,
  getNotificationById,
  createNotification,
  markAsRead,
  deleteNotification,
  getUnreadNotifications
} = require("../controllers/notificationController");

router.get("/", getAllNotifications);

router.get("/unread", getUnreadNotifications);

router.get("/:id", getNotificationById);

router.post("/", createNotification);

router.patch("/:id/read", markAsRead);

router.delete("/:id", deleteNotification);

module.exports = router;