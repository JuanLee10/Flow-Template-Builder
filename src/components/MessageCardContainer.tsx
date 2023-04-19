import { Box, Card, CardContent, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EditableCard from "./EditableCard";

// MessageCard Component in the middle of the content component
export default function MessageCardContainer() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "#CDCDCD",
        height: "91vh",
      }}
    >
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography>
            <ChatBubbleOutlineIcon />
            MessageExample
          </Typography>
        </CardContent>
        <CardContent>
          <EditableCard />
        </CardContent>
      </Card>
    </Box>
  );
}
