import { useState, useEffect } from "react";
import HomePStockList from './components/HomePStockList'
import Stockpage from "./components/Stockpage";
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
import Notification from "./components/Notification";
import Wishlist from "./components/Wishlist";
import Mystocks from "./components/Mystocks";
import Buy from "./components/BuySell/Buy";
import BuyPreview from "./components/BuySell/BuyPreview";
import Sell from "./components/BuySell/Sell";
import SellPreview from "./components/BuySell/SellPreview";
import BuySuccess from "./components/BuySell/BuySuccess";
import SellSuccess from "./components/BuySell/SellSuccess";

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

              {/* New User path */}
              <Route path="/" element={<Welcomepage />} />

              {/* Signup paths */}
              <Route path="/signup" element={<Email />} />
              <Route path="/signupVerification" element={<PinUp />} />
              <Route path="/signupSuccess" element={<Success />} />
              <Route path="/signupDetails" element={<Name />} />

              {/* Signin paths */}
              <Route path="/signin" element={<Signin />} />
              <Route path="/signinverification" element={<PinIn />} />

              {/* Navbar paths */}
              <Route path="/stocks" element={<HomePStockList />} />
              <Route path="/spotify" element={<Stockpage />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/account" element={<Accounts />} />
              <Route path="/test" element={<Yahoodataid />} />

              {/* General */}
              <Route path="/notifications" element={<Notification />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/mystocks" element={<Mystocks />} />

              {/* Buy Stock */}
              <Route path="/buy" element={<Buy />} />
              <Route path="/buy/preview" element={<BuyPreview />} />
              <Route path="/buy/success" element={<BuySuccess />} />
              {/* Sell Stock */}
              <Route path="/sell" element={<Sell />} />
              <Route path="/sell/preview" element={<SellPreview />} />
              <Route path="/sell/success" element={<SellSuccess />} />
            </Routes>
          </Router>
        </div>}
    </>
  );
}




export default App;
