import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import AllAddress from './Pages/AllAddress/AllAddress';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/all-address" element={<AllAddress></AllAddress>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
