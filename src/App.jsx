import { Container, Grid } from "@mui/material";
import { FeaturePost, Footer, MainBlog, MainPost, Navbar, SideBar } from "./components";

function App() {
  return (
    <Container>
      <Navbar />
      <FeaturePost />
      <MainPost />
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <MainBlog />
        <SideBar />
      </Grid>
      <Footer />
    </Container>
  );
}

export default App;
