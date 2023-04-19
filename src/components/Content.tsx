import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import HeadBar from "./HeadBar";
import CampaignBuilderSideBar from "./CampaignBuilderSideBar";
import MessageCardContainer from "./MessageCardContainer";

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
