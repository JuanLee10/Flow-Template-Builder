import { Box, Toolbar, Typography, Button, AppBar } from "@mui/material";
import HighlightIcon from "@mui/icons-material/Highlight";

export default function HeadBar() {
  return (
    <Box>
      <Toolbar sx={{ borderBottom: 1, height: 80 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            display: { sx: "None", sm: "block" },
            color: "black",
          }}
        >
          Create WhatsApp Campaign
        </Typography>
        <Box
          sx={{
            display: { sx: "None", sm: "block" },
            position: "absolute",
            right: 0,
          }}
        >
          <Button variant="outlined" sx={{ color: "light Blue" }}>
            <HighlightIcon />
            Tips
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "black", marginLeft: 1, marginRight: 1 }}
          >
            X
          </Button>
        </Box>
      </Toolbar>
    </Box>
  );
}
