import './css/App.css';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
          <Routes>
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
     
     
      </header>
    </div>
  );
}

export default App;
