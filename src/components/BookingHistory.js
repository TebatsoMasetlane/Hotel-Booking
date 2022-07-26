import React from 'react'
import { useHistory} from 'react-router-dom'
import style from '../style.css'

function AdminBooking() {

    const navigate = useHistory()
    function viewHistory(){
        navigate('/booking_history')
    }
  return (
    
    <body>
       <header>
						

                        <nav >
                            <a href="/home">Home</a> |
                            <a href="/hotels">Rooms</a> |
                            <a href="#falicility">Services</a> |
                            <a href="galary">Gallery</a> |
                            <a href="#history">Booking History</a> |
                            <a href="#contacts">Contacts</a> |
                        <button  class="navBtn">Log Out</button>

                        </nav>

                    </header>


        <div className="booking-home" id='history'>
            <div className="history-header">
                <button className="btn-view-history" onClick={viewHistory}>Booking History</button>
            </div>
            <div className="history-body">
                <div className="bookings">
                    <h2>Booking</h2>
                    <div className="booking-info">
                        <div className="booking-date">
                            <p>From : 12/12/2022</p>
                            <p>to : 12/13/2022</p>

                        </div>
                        <div className="booking-data">
                            <p>Room Name : <b>Superior Room</b></p>
                            <p>Adult : <b>2</b></p>
                            <p>Child  <b>2</b></p>
                            <p>No of Days : <b>2</b></p>
                        </div>
                        <div className="book-statuses">
                            <button className="confirm-status">Edit</button>
                            <button className="panding-status">Delete</button>
                        </div>
                    </div>
                </div>
                <div className="bookings">
                    <h2>Booking</h2>
                    <div className="booking-info">
                        <div className="booking-date">
                            <p>From : 12/12/2022</p>
                            <p>to : 12/13/2022</p>

                        </div>
                        <div className="booking-data">
                            <p>Room Name : <b>Superior Room</b></p>
                            <p>Adult : <b>2</b></p>
                            <p>Child  <b>2</b></p>
                            <p>No of Days : <b>2</b></p>
                        </div>
                        <div className="book-statuses">
                            <button  className="confirm-status">Edit</button>
                            <button className="panding-status">Delete</button>
                        </div>
                    </div>
                </div>
                <div className="bookings">
                    <h2>Booking</h2>
                    <div className="booking-info">
                        <div className="booking-date">
                            <p>From : 12/12/2022</p>
                            <p>to : 12/13/2022</p>

                        </div>
                        <div className="booking-data">
                            <p>Hotel Name : <b>Premium Room</b></p>
                            <p>Adults  <b>2</b></p>
                            <p>children  <b>2</b></p>
                            <p>No of Days <b>2</b></p>
                        </div>
                        <div className="book-statuses">
                            <button className="confirm-status">Edit</button>
                            <button  className="panding-status">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<footer id="footer" class="fh5co-bg-color">
<div class="container">
    <div class="row">
        <div class="col-md-3">
            
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-3">
                    <h3>Company</h3>
                    <ul class="link">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Hotels</a></li>
                        <li><a href="#">Customer Care</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                
                <div class="col-md-3" id="falicility">
                    <h3>Our Facilities</h3>
                    <ul class="link">
                        <li><a href="#">Resturant</a></li>
                        <li><a href="#">Bars</a></li>
                        <li><a href="#">Pick-up</a></li>
                        <li><a href="#">Swimming Pool</a></li>
                        <li><a href="#">Spa</a></li>
                        <li><a href="#">Gym</a></li>
                    </ul>
                </div>
                
                <div class="col-md-3" id="contacts">
                    <h3>Contact Us</h3>
                    <ul class="link">
                        <li><a href="#">3015 Grand Ave, Cocount Grove, Merrick Way FL 123456</a></li>
                        <li><a href="#">descoveryhtl@gmail.com</a></li>
                        <li><a href="#">123 456 7898</a></li>
                        <li><a href="#">123 456 7898</a></li>
                        <li><a href="#">24/7 Customer Services</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <img src="https://img.icons8.com/color/48/000000/visa.png" />
                      <img src="https://img.icons8.com/color/48/000000/mastercard.png" />
                      <img src="https://img.icons8.com/color-glass/48/000000/paypal.png" />
                </div>
            </div>
        </div>
    </div>
</div>
</footer>
</body>
        
  )
}

export default AdminBooking
