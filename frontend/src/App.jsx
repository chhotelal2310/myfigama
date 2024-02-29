import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
         
          <Route path="/" element={<>
            <Header />
            <Home />
            <Footer />
          </>} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
