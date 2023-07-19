import "./style.css";

import Homepage from "./routes/Homepage";
import About from "./routes/About";
import Discover from "./routes/Discover";
import Contact from "./routes/Contact";
import {Route,Routes} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/discover" element={<Discover/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
     
    
      </div>
  );
}

//export default App;
