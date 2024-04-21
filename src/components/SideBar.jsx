import { Grid, Link, Paper, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

function SideBar() {
  const archives = [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ];

  const social = [
    { title: "Github", icon: GitHubIcon },
    { title: "X", icon: XIcon },
    { title: "Facebook", icon: FacebookIcon },
  ];

  return (
    <Grid item xs={12} md={4} sx={{mt:{md:3}}} >
      <Paper elevation={4} sx={{ p: 2, bgcolor: "grey.200" }}>
        <Typography variant="h6" gutterBottom>
          About
        </Typography>
        <Typography variant="body2">
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link
          display="block"
          key={archive.title}
          sx={{ mb: 0.5,cursor:'pointer' }}
          underline="none"
        >
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Social
      </Typography>
      {social.map((item) => (
        <Link underline="none"  >
          <Stack direction="row" spacing={1} alignItems='center' sx={{pb:1,cursor:'pointer'}}>
            <item.icon  />
            <span>{item.title}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}

export default SideBar;
