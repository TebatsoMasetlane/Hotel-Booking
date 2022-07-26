import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/home.js'
 import Login from './components/Login.js'
import Register from "./components/Register.js"
import Payment from "./components/Payment.js"
import Popup from "./components/popup.js"
import Homepage from "./components/Homepage.js"
import Admin from './components/AddHotel'
import Hotels from "./components/hotels.js"
import AdminLog from "./components/AdminLog.js"
import AdminHome from "./components/AdminHome.js"
import Booking from "./components/AdminBooking.js"
import BookingHistory from "./components/BookingHistory.js"



function App() {
  

  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path="/" ><Home /></Route>
          <Route exact path="/home" ><Homepage /></Route>
           <Route exact path="/login" ><Login /></Route>
          <Route exact path="/signup" ><Register /></Route> 
          <Route exact path="/pay" ><Payment /></Route>
          <Route exact path="/pop" ><Popup /></Route>
          <Route exact path="/add" ><Admin /></Route>
          <Route path="/hotels"><Hotels/></Route>
          <Route path="/AdminLog"><AdminLog/></Route>
          <Route path="/AdminHome"><AdminHome/></Route>
          <Route path="/booking"><Booking/></Route>
          <Route path="/bookingHistory"><BookingHistory/></Route>
          
        
        </Switch>

      </Router>
    </div>
  );
}

export default App;
