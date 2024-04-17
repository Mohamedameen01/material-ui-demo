import { Divider, Grid, Typography } from "@mui/material";
import Markdown from "react-markdown";

import blog1 from "../assests/blogs/blog1.md";
import blog2 from "../assests/blogs/blog2.md";
import blog3 from "../assests/blogs/blog3.md";

function MainBlog() {
  const blogs = [blog1, blog2, blog3];
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        From the firehose
      </Typography>
      <Divider />
      {/* {blogs.map((blog) => ( */}
        <Markdown >{blog1}</Markdown>
      {/* ))} */}
    </Grid>
  );
}

export default MainBlog;
