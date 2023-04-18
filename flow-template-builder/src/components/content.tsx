import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Button, Grid } from "@mui/material";

import HeadBar from "./HeadBar";
import CampaignBuilderSideBar from "./CampaignBuilderSideBar";
import MessageCardContainer from "./MessageCardContainer";

const drawerWidth = 60;

const navItems = ["Home", "About", "Contact"];

export default function Content() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12}>
          <HeadBar />
        </Grid>
        <Grid item xs={3}>
          <CampaignBuilderSideBar />
        </Grid>
        <Grid item xs={9}>
          <MessageCardContainer />
        </Grid>
      </Grid>
    </Box>
  );
}
