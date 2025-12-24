import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import AboutUs from"./AboutUs";
import Todos from "./Todos";
import Notfound from "./Notfound";
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/todos" element={<Todos/>}/>
        <Route path="*" element={<Notfound/>}/>
        
      </Routes>

      </BrowserRouter>
    </div>
  )
};

export default App;

