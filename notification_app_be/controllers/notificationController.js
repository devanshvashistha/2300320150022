const notifications = require("../data/notifications");

exports.getAllNotifications = (req, res) => {
  res.status(200).json({
    notifications
  });
};

exports.getNotificationById = (req, res) => {
  const notification = notifications.find(
    n => n.id === req.params.id
  );

  if (!notification) {
    return res.status(404).json({
      message: "Notification not found"
    });
  }

  res.json(notification);
};

exports.createNotification = (req, res) => {
  const { title, message, type } = req.body;

  const notification = {
    id: Date.now().toString(),
    title,
    message,
    type,
    isRead: false,
    createdAt: new Date()
  };

  notifications.push(notification);

  res.status(201).json({
    message: "Notification Created Successfully",
    notification
  });
};

exports.markAsRead = (req, res) => {
  const notification = notifications.find(
    n => n.id === req.params.id
  );

  if (!notification) {
    return res.status(404).json({
      message: "Notification not found"
    });
  }

  notification.isRead = true;

  res.json({
    message: "Notification marked as read"
  });
};

exports.deleteNotification = (req, res) => {
  const index = notifications.findIndex(
    n => n.id === req.params.id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Notification not found"
    });
  }

  notifications.splice(index, 1);

  res.json({
    message: "Notification deleted successfully"
  });
};

exports.getUnreadNotifications = (req, res) => {
  const unread = notifications.filter(
    n => !n.isRead
  );

  res.json({
    count: unread.length,
    notifications: unread
  });
};