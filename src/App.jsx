import { Route, Routes } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/Home/Home";
import ServiceMap from "./components/ServiceMap/ServiceMap";
import ServiceOne from "./components/ServiceOne/ServiceOne";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/service" element={<ServiceMap />} />
      <Route path="/service/:id" element={<ServiceOne />}/>
    </Routes>
  );
}

export default App;