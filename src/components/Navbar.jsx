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
        <Button size="small" sx={{display:{xs:'none', md:'block'}}}>Subscribe</Button>
        <Typography variant="h5" sx={{ flex: 1, textAlign:{md:'center'} }}>
          Blog
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button sx={{textWrap:'wrap'}}  variant="outlined">Sign up</Button>
      </Toolbar>
      <Toolbar sx={{ my:1,display:"flex",gap:1, justifyContent: "space-between",overflowX:{xs:'scroll',md:'hidden'} }}>
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
