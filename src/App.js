import { useState, useEffect } from "react";
import HomePStockList from './components/HomePStockList'
import Stockpage from "./components/Stockpage";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import Accounts from "./components/Accounts";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Yahoodataid from "./components/Yahoodataid";
import DesktopPage from "./components/DesktopPage";
import Welcomepage from "./components/Welcomepage";
import Name from "./components/Signup/Name";
import Email from "./components/Signup/Email";
import PinUp from "./components/Signup/Pin";
import PinIn from "./components/Signin/Pin";
import Success from "./components/Signup/Success";
import Signin from "./components/Signin/Signin";

function App() {

  // For Checking Window Size 
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      {(windowSize[0] > 800) ? <DesktopPage /> :
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<HomePStockList />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Email />} />
              <Route path="/signupverification" element={<PinUp />} />
              <Route path="/signinverification" element={<PinIn />} />
              <Route path="/spotify" element={<Stockpage />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/account" element={<Accounts />} />
              <Route path="/test" element={<Welcomepage />} />
            </Routes>
          </Router>
        </div>}
    </>
  );
}




export default App;
