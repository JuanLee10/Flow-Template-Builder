import { Divider, List, ListItem, ListItemButton } from "@mui/material";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import CampaignIcon from "@mui/icons-material/Campaign";
import SettingsIcon from "@mui/icons-material/Settings";

const listStyle = {
  bgcolor: "#282c34",
  height: "100vh",
} as const;
const iconStyle = { color: "white" } as const;
const listItemStyle = {
  marginTop: 1,
  marginBottom: 1,
  justifyContent: "center",
} as const;
const dividerStyle = { bgcolor: "white" } as const;

export default function NavBar() {
  return (
    <List sx={listStyle}>
      <ListItem key={"BuildCircleIcon"} sx={listItemStyle}>
        <ListItemButton sx={{ justifyContent: "center" }}>
          <BuildCircleIcon sx={iconStyle} />
        </ListItemButton>
      </ListItem>
      <Divider sx={dividerStyle} />
      <ListItem key={"AccountCircleIcon"} sx={listItemStyle}>
        <ListItemButton sx={{ justifyContent: "center" }}>
          <AccountCircleIcon sx={iconStyle} />
        </ListItemButton>
      </ListItem>
      <Divider sx={dividerStyle} />
      <ListItem key={"WidgetsIcon"} sx={listItemStyle}>
        <ListItemButton sx={{ justifyContent: "center" }}>
          <WidgetsIcon sx={iconStyle} />
        </ListItemButton>
      </ListItem>
      <ListItem key={"ModeCommentIcon"} sx={listItemStyle}>
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ModeCommentIcon sx={iconStyle} />
        </ListItemButton>
      </ListItem>
      <ListItem key={"CampaignIcon"} sx={listItemStyle}>
        <ListItemButton sx={{ justifyContent: "center" }}>
          <CampaignIcon sx={iconStyle} />
        </ListItemButton>
      </ListItem>
      <ListItem key={"SettingsIcon"} sx={{ position: "absolute", bottom: 15 }}>
        <ListItemButton sx={{ justifyContent: "center" }}>
          <SettingsIcon sx={iconStyle} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
