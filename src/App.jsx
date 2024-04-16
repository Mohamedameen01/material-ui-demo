import { Container } from "@mui/material"
import { FeaturePost, MainPost, Navbar } from "./components"


function App() {
 
  return (
    <Container>
      <Navbar />
      <FeaturePost />
      <MainPost />
    </Container>
  )
}

export default App
