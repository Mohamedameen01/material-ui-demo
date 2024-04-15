import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import AnimationIcon from "@mui/icons-material/Animation";
import useStyles from "./style";

function Navbar() {

  const classes = useStyles();

  return (
    <AppBar position="fixed" color="transparent">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <AnimationIcon />
          <Typography variant="h6">theFront.</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
