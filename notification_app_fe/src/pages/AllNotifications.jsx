import { useEffect, useState } from "react";
import api from "../services/api";
import NotificationCard from "../components/NotificationCard";

function AllNotifications() {

  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {

    api
      .get("/notifications")
      .then(res => {
        setNotifications(res.data);
      });

  }, []);

  return (
    <div>
      <h1>All Notifications</h1>

      {
        notifications.map(n => (
          <NotificationCard
            key={n.id}
            notification={n}
          />
        ))
      }
    </div>
  );
}

export default AllNotifications;