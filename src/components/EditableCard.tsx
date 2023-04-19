import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import pugPhoto from "../assets/Pug-PNG-Clipart.png";
import React from "react";
import EditMessageSideBar from "./EditMessageSideBar";

export default function EditableCard() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [header, setHeader] = React.useState("");
  const [bodyText, setBodyText] = React.useState("");
  const [footerText, setFooterText] = React.useState("");
  const [buttonText1, setButtonText1] = React.useState("");
  const [buttonText2, setButtonText2] = React.useState("");
  const [buttonText3, setButtonText3] = React.useState("");

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen(open);
    };
  return (
    <Paper sx={{ bgcolor: "#EEEEEE" }}>
      <Box sx={{ marginX: 2, paddingY: 2 }}>
        <Card onClick={toggleDrawer(true)}>
          <CardContent sx={{ p: 1 }}>
            <Typography
              sx={{
                bgcolor: "#EEEEEE",
                color: "green",
                width: 55,
                p: 1,
                position: "absolute",
                zIndex: 1000,
              }}
            >
              Header
            </Typography>
            {header ? (
              <Box
                sx={{ position: "relative", bottom: 2, right: 2, zIndex: 1 }}
              >
                <img
                  src={header}
                  loading="lazy"
                  width="200px"
                  height="104.5px"
                  alt={""}
                />
              </Box>
            ) : (
              <Box
                sx={{ position: "relative", bottom: 2, right: 2, zIndex: 1 }}
              >
                <img
                  src={pugPhoto}
                  width="200px"
                  height="104.5px"
                  loading="lazy"
                  alt={""}
                />
              </Box>
            )}
          </CardContent>
          <Divider variant="middle" sx={{ bgcolor: "green" }} />
          <CardContent>
            <Typography
              sx={{ bgcolor: "#EEEEEE", color: "green", width: 110, p: 1 }}
            >
              Body Message
            </Typography>

            <Typography>
              {bodyText
                ? bodyText
                : "We have an exciting offer. Are you interested in hearing more?"}
            </Typography>
          </CardContent>
          <Divider variant="middle" sx={{ bgcolor: "green" }} />
          <CardContent>
            <Typography
              sx={{ bgcolor: "#EEEEEE", color: "green", width: 45, p: 1 }}
            >
              Footer
            </Typography>
            <Typography>
              {footerText ? footerText : "Reply 'STOP' to opt out"}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ marginTop: 1 }} onClick={toggleDrawer(true)}>
          <CardContent>
            {buttonText1 ? (
              <Button size={"small"}>{buttonText1}</Button>
            ) : (
              <Button size={"small"}>Talk to a styling expert</Button>
            )}
            {buttonText2 ? (
              <Button size={"small"}>{buttonText2}</Button>
            ) : (
              <></>
            )}
            {buttonText3 ? (
              <Button size={"small"}>{buttonText3}</Button>
            ) : (
              <></>
            )}
          </CardContent>
        </Card>
        <EditMessageSideBar
          toggleDrawer={toggleDrawer}
          isOpen={isOpen}
          setHeader={setHeader}
          setBodyText={setBodyText}
          setFooterText={setFooterText}
          setButtonText1={setButtonText1}
          setButtonText2={setButtonText2}
          setButtonText3={setButtonText3}
        />
      </Box>
    </Paper>
  );
}
