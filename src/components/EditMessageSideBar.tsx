import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {
  Autocomplete,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import ImageIcon from "@mui/icons-material/Image";
import InfoIcon from "@mui/icons-material/Info";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import Crop169TwoToneIcon from "@mui/icons-material/Crop169TwoTone";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HighlightIcon from "@mui/icons-material/Highlight";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";

export default function EditMessageSideBar({
  toggleDrawer,
  isOpen,
  header,
  setHeader,
  bodyText,
  setBodyText,
  footerText,
  setFooterText,
  buttonText1,
  setButtonText1,
  buttonText2,
  setButtonText2,
  buttonText3,
  setButtonText3,
}: {
  toggleDrawer: (open: boolean) => any;
  isOpen: boolean;
  header: string;
  setHeader: (header: string) => void;
  bodyText: string;
  setBodyText: (bodyText: string) => void;
  footerText: string;
  setFooterText: (footerText: string) => void;
  buttonText1: string;
  setButtonText1: (buttonText1: string) => void;
  buttonText2: string;
  setButtonText2: (buttonText2: string) => void;
  buttonText3: string;
  setButtonText3: (buttonText3: string) => void;
}) {
  const [headerSwitch, setHeaderSwitch] = useState(true);
  const [footerSwitch, setFooterSwitch] = useState(false);
  const [buttonSwitch, setButtonSwitch] = useState(false);

  const [tempHeader, setTempHeader] = React.useState("");
  const [tempBodyText, setTempBodyText] = React.useState("");
  const [tempFooterText, setTempFooterText] = React.useState("");
  const [tempButtonText1, setTempButtonText1] = React.useState("");
  const [tempButtonText2, setTempButtonText2] = React.useState("");
  const [tempButtonText3, setTempButtonText3] = React.useState("");

  const [autoCompleteOption, setAutoCompleteOption] = React.useState<
    string | null
  >("Image");

  const onSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "headerSwitch":
        setHeaderSwitch(!headerSwitch);
        break;
      case "footerSwitch":
        setTempFooterText("");
        setFooterSwitch(!footerSwitch);
        break;
      case "buttonSwitch":
        setButtonSwitch(!buttonSwitch);
        setTempButtonText1("");
        setTempButtonText2("");
        setTempButtonText3("");
        break;
    }
  };

  const onTextChange = (e: {
    target: {
      [x: string]: any;
      name: any;
      value: string;
    };
  }) => {
    switch (e.target.name) {
      case "buttonText1":
        setTempButtonText1(e.target.value);
        break;
      case "buttonText2":
        setTempButtonText2(e.target.value);
        break;
      case "buttonText3":
        setTempButtonText3(e.target.value);
        break;
      case "bodyText":
        setTempBodyText(e.target.value);
        break;
      case "footerText":
        setTempFooterText(e.target.value);
        break;
      case "image":
        setTempHeader(URL.createObjectURL(e.target.files[0]));
        break;
    }
  };

  const onSave = () => {
    setButtonText1(tempButtonText1);
    setButtonText2(tempButtonText2);
    setButtonText3(tempButtonText3);
    setBodyText(tempBodyText);
    setFooterText(tempFooterText);
    setHeader(tempHeader);
  };

  return (
    <div>
      {
        <React.Fragment key={"right"}>
          <Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 325 }} role="presentation">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant={"h5"}>Edit Message</Typography>
                <Box>
                  <IconButton
                    edge="end"
                    aria-label="info"
                    size="small"
                    onClick={toggleDrawer(false)}
                  >
                    <ClearIcon />
                  </IconButton>
                </Box>
              </Box>
              <Typography>Content</Typography>
              {/* Header */}
              <Card sx={{ minWidth: 250, marginY: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={9} display="flex">
                    <ImageIcon sx={{ color: "grey", marginLeft: 1 }} />
                    <Typography sx={{ marginLeft: 1 }}>
                      Header
                      <IconButton edge="end" aria-label="info" size="small">
                        <InfoIcon fontSize="small" />
                      </IconButton>
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Switch
                      onChange={(e) => {
                        onSwitchChange(e);
                      }}
                      name="headerSwitch"
                      checked={headerSwitch}
                    />
                  </Grid>
                  {headerSwitch ? (
                    <Grid item xs={10} alignContent="center">
                      <Autocomplete
                        options={["Image", "Text", "Video", "Document"]}
                        renderInput={(params) => <TextField {...params} />}
                        sx={{ marginX: 1 }}
                        value={autoCompleteOption}
                        onChange={(event: any, newValue: string | null) => {
                          setAutoCompleteOption(newValue);
                        }}
                      />
                      {autoCompleteOption === "Image" ? (
                        <Box>
                          <Typography variant="caption" sx={{ marginLeft: 1 }}>
                            Image size recommendation: 800 x 418 pixel.
                          </Typography>
                          <Button
                            variant="outlined"
                            component="label"
                            sx={{ marginX: 1, marginY: 1 }}
                          >
                            Upload Image
                            <input
                              hidden
                              accept="image/*"
                              multiple
                              type="file"
                              name="image"
                              onChange={onTextChange}
                            />
                          </Button>
                        </Box>
                      ) : (
                        <></>
                      )}
                      <Paper
                        sx={{
                          bgcolor: "#EEEEEE",
                          marginX: 1,
                          marginY: 1,
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            p: 1,
                            justifyContent: "space-between",
                          }}
                        >
                          <Box sx={{ display: "flex" }}>
                            <HighlightIcon />
                            <Typography
                              variant="subtitle1"
                              alignContent={"center"}
                            >
                              Image header tips
                            </Typography>
                          </Box>
                          <Box>
                            <IconButton
                              edge="end"
                              aria-label="info"
                              size="small"
                            >
                              <ClearIcon />
                            </IconButton>
                          </Box>
                        </Box>

                        <Typography
                          variant="body2"
                          color={"grey"}
                          textAlign="left"
                          marginX={1}
                        >
                          Images can enrich the message experience and help
                          maintain engagement. Use eye-catching images that
                          summarize the message (eg discounts, gifts, etc.)
                        </Typography>
                        <Button size="small" sx={{ marginX: 0.5 }}>
                          Learn More
                        </Button>
                      </Paper>
                    </Grid>
                  ) : (
                    <></>
                  )}
                </Grid>
              </Card>
              {/* Body Message */}
              <Card sx={{ minWidth: 250, marginY: 3 }}>
                <Grid container spacing={1}>
                  <Grid item xs={7} display="flex">
                    <TextFieldsIcon sx={{ color: "grey", marginLeft: 1 }} />
                    <Typography sx={{ marginLeft: 1 }}>
                      Body message
                      <IconButton edge="end" aria-label="info" size="small">
                        <InfoIcon fontSize="small" />
                      </IconButton>
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      variant="button"
                      color="common.black"
                      bgcolor="#EEEEEE"
                    >
                      Required
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    justifyContent="center"
                    p={0}
                    display="flex"
                  >
                    <OutlinedInput
                      id="outlined-multiline-static"
                      name="bodyText"
                      multiline
                      rows={8}
                      defaultValue="We have an exciting offer. Are you interested in hearing more?"
                      inputProps={{ maxLength: 1024 }}
                      sx={{ marginX: 1 }}
                      endAdornment={
                        <InputAdornment position="end">
                          {tempBodyText.length}/1024
                        </InputAdornment>
                      }
                      onChange={onTextChange}
                      value={tempBodyText}
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={5} justifyContent="start" p={0} display="flex">
                    <Button size="small">Add Variable</Button>
                  </Grid>
                  <Grid item xs={7} p={0} justifyContent="end" display="flex">
                    <Box>
                      <IconButton
                        edge="end"
                        aria-label="info"
                        size="small"
                        //   sx={{ bottom: 10, marginLeft: 1 }}
                      >
                        <EmojiEmotionsIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="info"
                        size="small"
                        //   sx={{ bottom: 10 }}
                      >
                        <FormatBoldIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="info"
                        size="small"
                        sx={{ padding: 0 }}
                      >
                        <FormatClearIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="info"
                        size="small"
                        //   sx={{ bottom: 10 }}
                      >
                        <FormatItalicIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="info"
                        size="small"
                        //   sx={{ bottom: 10 }}
                      >
                        <ChevronLeftIcon fontSize="small" />
                        <ChevronRightIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Grid>
                  <Grid item xs={12} alignContent="center">
                    <Paper
                      sx={{
                        bgcolor: "#EEEEEE",
                        marginX: 1,
                        marginY: 1,
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          p: 1,
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex" }}>
                          <HighlightIcon />
                          <Typography
                            variant="subtitle1"
                            alignContent={"center"}
                          >
                            What are Variables?
                          </Typography>
                        </Box>
                        <Box>
                          <IconButton edge="end" aria-label="info" size="small">
                            <ClearIcon />
                          </IconButton>
                        </Box>
                      </Box>

                      <Typography
                        variant="body2"
                        color={"grey"}
                        textAlign="left"
                        marginX={1}
                      >
                        Variables are dynamic content that help personalize your
                        campaign, for example: customer names or coupon codes.
                      </Typography>
                      <Button size="small" sx={{ marginX: 0.5 }}>
                        Learn More
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
              </Card>
              {/* Footer Text */}
              <Card sx={{ minWidth: 250, marginY: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={9} display="flex">
                    <TextFieldsIcon sx={{ color: "grey", marginLeft: 1 }} />
                    <Typography sx={{ marginLeft: 1 }}>
                      Footer text
                      <IconButton edge="end" aria-label="info" size="small">
                        <InfoIcon fontSize="small" />
                      </IconButton>
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Switch
                      name="footerSwitch"
                      onChange={(e) => {
                        onSwitchChange(e);
                      }}
                      checked={footerSwitch}
                    />
                  </Grid>
                  {footerSwitch ? (
                    <>
                      <Grid
                        item
                        xs={12}
                        justifyContent="center"
                        p={0}
                        display="flex"
                      >
                        <OutlinedInput
                          id="outlined-multiline-static"
                          name="footerText"
                          multiline
                          rows={8}
                          defaultValue="Reply 'STOP' to opt out"
                          inputProps={{ maxLength: 1024 }}
                          sx={{ marginX: 1 }}
                          endAdornment={
                            <InputAdornment position="end">
                              {tempFooterText.length}/1024
                            </InputAdornment>
                          }
                          onChange={onTextChange}
                          value={tempFooterText}
                          fullWidth={true}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={5}
                        justifyContent="start"
                        p={0}
                        display="flex"
                      >
                        <Button size="small">Add Variable</Button>
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        p={0}
                        justifyContent="end"
                        display="flex"
                      >
                        <Box>
                          <IconButton
                            edge="end"
                            aria-label="info"
                            size="small"
                            //   sx={{ bottom: 10, marginLeft: 1 }}
                          >
                            <EmojiEmotionsIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="info"
                            size="small"
                            //   sx={{ bottom: 10 }}
                          >
                            <FormatBoldIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="info"
                            size="small"
                            sx={{ padding: 0 }}
                          >
                            <FormatClearIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="info"
                            size="small"
                            //   sx={{ bottom: 10 }}
                          >
                            <FormatItalicIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="info"
                            size="small"
                            //   sx={{ bottom: 10 }}
                          >
                            <ChevronLeftIcon fontSize="small" />
                            <ChevronRightIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Grid>
                    </>
                  ) : (
                    <></>
                  )}
                </Grid>
              </Card>
              {/* Buttons */}
              <Card sx={{ minWidth: 250, marginY: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={9} display="flex">
                    <Crop169TwoToneIcon sx={{ color: "grey", marginLeft: 1 }} />
                    <Typography sx={{ marginLeft: 1 }}>
                      Buttons
                      <IconButton edge="end" aria-label="info" size="small">
                        <InfoIcon fontSize="small" />
                      </IconButton>
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Switch
                      name="buttonSwitch"
                      onChange={(e) => {
                        onSwitchChange(e);
                      }}
                      checked={buttonSwitch}
                    />
                  </Grid>
                  {buttonSwitch ? (
                    <>
                      <Grid item xs={12}>
                        <Box
                          marginX={1}
                          display={"flex"}
                          justifyContent={"space-between"}
                        >
                          <Typography>Button 1</Typography>
                          <IconButton edge="end" aria-label="Delete">
                            <DeleteOutlineIcon />
                          </IconButton>
                        </Box>
                        <Box marginX={1} marginBottom={1}>
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={
                              <InputAdornment position="end">
                                {tempButtonText1.length}/25
                              </InputAdornment>
                            }
                            name={"buttonText1"}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              "aria-label": "weight",
                              maxLength: 25,
                            }}
                            value={tempButtonText1}
                            onChange={onTextChange}
                            defaultValue={"Talk to an styling expert"}
                            fullWidth={true}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box
                          marginX={1}
                          display={"flex"}
                          justifyContent={"space-between"}
                        >
                          <Typography>Button 2</Typography>
                          <IconButton edge="end" aria-label="Delete">
                            <DeleteOutlineIcon />
                          </IconButton>
                        </Box>
                        <Box marginX={1} marginBottom={1}>
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={
                              <InputAdornment position="end">
                                {tempButtonText2.length}/25
                              </InputAdornment>
                            }
                            name={"buttonText2"}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              "aria-label": "weight",
                              maxLength: 25,
                            }}
                            value={tempButtonText2}
                            defaultValue={"Sure!"}
                            onChange={onTextChange}
                            fullWidth={true}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box
                          marginX={1}
                          display={"flex"}
                          justifyContent={"space-between"}
                        >
                          <Typography>Button 3</Typography>
                          <IconButton edge="end" aria-label="Delete">
                            <DeleteOutlineIcon />
                          </IconButton>
                        </Box>
                        <Box marginX={1} marginBottom={1}>
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={
                              <InputAdornment position="end">
                                {tempButtonText3.length}/25
                              </InputAdornment>
                            }
                            name={"buttonText3"}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              "aria-label": "weight",
                              maxLength: 25,
                            }}
                            value={tempButtonText3}
                            defaultValue={"Maybe next time"}
                            onChange={onTextChange}
                            fullWidth={true}
                          />
                        </Box>
                      </Grid>
                    </>
                  ) : (
                    <></>
                  )}
                </Grid>
              </Card>
              <Button fullWidth={true} variant="contained" onClick={onSave}>
                Save
              </Button>
              <Button
                fullWidth={true}
                variant="outlined"
                onClick={toggleDrawer(false)}
              >
                Delete
              </Button>
            </Box>
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
