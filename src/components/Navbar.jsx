import {
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  const navlists = [
    "Technology",
    "Design",
    "Culture",
    "Business",
    "Politics",
    "Opinion",
    "Science",
  ];
  return (
    <>
      <Toolbar>
        <Button size="small">Subscribe</Button>
        <Typography variant="h5" align="center" sx={{ flex: 1 }}>
          Blog
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined">Sign up</Button>
      </Toolbar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {navlists.map((nav) => (
          <Link
            underline="none"
            variant="body1"
            sx={{ color: "black", cursor: "pointer" }}
            key={nav}
          >
            {nav}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}

export default Navbar;
