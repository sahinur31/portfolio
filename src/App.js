import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './Bootstrap/bootstrap.min.css';
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/details/:id" element={<Details></Details>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
