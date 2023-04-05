import Navbar from "./components/Navbar";
import Playground from "./components/Playground";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PageNotFound from "./components/PageNotFound";


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #C5C5C5;
`;

function App() {

  return (
    <AppContainer>

      <BrowserRouter>
        <Navbar />
        <Playground >

          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>

        </Playground >
      </BrowserRouter>


    </AppContainer >

  );
}

export default App;
