import { useEffect, useState } from "react";

import api from "../services/api";

import NotificationCard
from "../components/NotificationCard";

function PriorityNotifications() {

  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {

    api
      .get("/priority")
      .then(res => {

        setNotifications(res.data);

      });

  }, []);

  return (
    <div>
      <h1>
        Top Priority Notifications
      </h1>

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

export default PriorityNotifications;