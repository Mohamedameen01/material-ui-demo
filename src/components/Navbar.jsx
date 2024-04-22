import {
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
        <Button onClick={() => navigate('/signup')} sx={{textWrap:'wrap'}}  variant="outlined">Sign up</Button>
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
