import { Link, Paper, Typography } from "@mui/material";
import { FeaturePostImg } from "../assests/images";

function FeaturePost() {
  return (
    <>
      <Paper
        sx={{
          height: "200px",
          backgroundSize: "cover",
          backgroundImage:
            `url(${FeaturePostImg})`,
        }}
      >
        <Typography
          color={"white"}
          sx={{ padding: "15px" }}
          align="center"
          variant="h4"
        >
          Title for featured blog post
        </Typography>
        <Typography color={"white"} variant="body1" sx={{ padding: "14px" }}>
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents.
        </Typography>
        <Link color={'red'} variant="subtitle2" underline="none" sx={{padding:'15px'}} >Continue Reading...</Link>
      </Paper>
    </>
  );
}

export default FeaturePost;
