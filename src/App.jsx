import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages";
import { Signin, Signup } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup"  element={<Signup />}/>
        <Route path="/signin"  element={<Signin />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
