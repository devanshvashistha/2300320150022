import { Card, CardContent, Typography } from "@mui/material";

function NotificationCard({ notification }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {notification.title}
        </Typography>

        <Typography>
          Type: {notification.type}
        </Typography>

        {notification.score && (
          <Typography>
            Score: {notification.score}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default NotificationCard;