import { Card, CardContent, Typography } from "@mui/material";

export default function EditableCard() {
  return (
    <Card>
      <CardContent>
        <Typography>Header</Typography>
      </CardContent>
      <CardContent>
        <Typography>Body Message</Typography>
        <Typography>Random text for Body Message</Typography>
      </CardContent>
      <CardContent>
        <Typography>Footer</Typography>
      </CardContent>
    </Card>
  );
}
