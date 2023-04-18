import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CampaignBuilderSideBar() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [1, 2, 3, 4];
  return (
    <Box sx={{ p: 2, height: "86vh", borderRight: 0.1 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography
        variant="h5"
        component="div"
        sx={{ marginTop: 4, align: "left" }}
      >
        Build Campaign
      </Typography>
      <TextField
        id="outlined-basic"
        label="Campaign Name"
        variant="standard"
        sx={{ marginTop: 4 }}
      />

      <Typography variant="h6" component="div" sx={{ marginTop: 4 }}>
        Drag and Drop
      </Typography>
      <List>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <InfoIcon />
            </IconButton>
          }
          sx={{ border: 0.1 }}
        >
          <ListItemAvatar>
            <Avatar>
              <MessageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Message" />
        </ListItem>
      </List>
      <Button
        sx={{ position: "absolute", bottom: 15, width: "20vw" }}
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        disabled={true}
      >
        Next
      </Button>
    </Box>
  );
}
