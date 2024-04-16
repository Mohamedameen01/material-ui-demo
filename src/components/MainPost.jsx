import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { CardImg } from "../assests/images";

function MainPost() {
  const length = [1, 2];
  return (
    <Grid container spacing={2} sx={{ padding: "10px" }}>
      {length.map((item) => (
        <Grid item xs={12} md={6}>
          <Card
            key={item}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "whitesmoke",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography sx={{ padding: "5px" }} variant="h5">
                  Featured Post
                </Typography>
                <Typography sx={{ padding: "5px" }} variant="body1">
                  April 16
                </Typography>
                <Typography sx={{ padding: "5px" }} variant="body2">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Typography>
                <Link
                  sx={{ padding: "5px" }}
                  underline="none"
                  variant="subtitle1"
                >
                  Continue reading...
                </Link>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: "200px", display: { xs: "none", sm: "block" } }}
              image={CardImg}
              alt="image"
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default MainPost;
