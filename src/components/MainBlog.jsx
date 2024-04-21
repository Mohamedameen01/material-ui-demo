import { Divider, Grid, Paper, Typography } from "@mui/material";

import { blog1, blog2, blog3 } from "../assests/blogs.js";

function MainBlog() {
  const blogs = [blog1, blog2, blog3];

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        From the firehose
      </Typography>
      <Divider />
      {blogs.map((blog) => (
        <Paper elevation={4} sx={{m:2,p:2,display:'grid',gap:1}} key={blog.no}>
          <Typography variant="h5">{blog.title}</Typography>
          <Typography variant="body1">{blog.subtitle}</Typography>
          <Typography variant="body2">{blog.content}</Typography>
        </Paper>
      ))}
    </Grid>
  );
}

export default MainBlog;
