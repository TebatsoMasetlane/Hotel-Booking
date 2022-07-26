import React, { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase'
import style from '../style.css'
import hotelImage from '../images/bath.jpg';
import './popbook.css'
import { Link, useHistory } from 'react-router-dom';
import Popup from './popup';
import popup from './popup.module.css'



function Hotels() {
    const history = useHistory()
    const collectionRef = collection(db, "Hotel");

    const [hotelDetails, setHotelDetails] = useState([]);

    const getAllHotels = () => {
        return getDocs(collectionRef);
    }
    useEffect(() => {
        getHotels();
    }, []);
    const getHotels = async () => {
        const data = await getAllHotels();
        console.log(data.docs)
        setHotelDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }



    const [BookPopUp, setBookPopUp] = useState(false)
    const [checkIn, setcheckIn] = useState('')
    const [checkOut, setcheckOut] = useState('')
    const [adult, setadult] = useState('')
    const [child, setchild] = useState('')
    const [HotelData, setHotelData] = useState({})
    const [TotalPrice, setTotalPrice] = useState(0)


    useEffect(() => {

        if (checkIn !== '' && checkOut !== '') {
            var startDate = new Date(checkIn)
            var endDate = new Date(checkOut)
            if (endDate > startDate) {
                //const diftime=Math.abs(endDate-startDate)
                //setTotalPrice(Math.ceil(diftime/(24*3600*1000)* Number(HotelData.price)))
                setTotalPrice((endDate.getTime() - startDate.getTime()) / (24 * 3600 * 1000) * HotelData.fee)
                console.log(TotalPrice)
            }
            else {
                alert('Check in date cannot be after check out date')
            }


        }
    })



    function checkInNow() {
        var chechData = {
            checkIn: checkIn,
            checkOut: checkOut,
            TotalPrice: TotalPrice,
            adult: adult,
            child: child
        }

        localStorage.setItem('chechData', JSON.stringify(chechData))
        localStorage.setItem('hotelData', JSON.stringify(HotelData))
        history.push('/pay')
    }

    function bookNow(data) {
        setHotelData(data)
        console.log(data)
        setcheckIn('')
        setcheckOut('')
        setchild('')
        setadult('')
        setTotalPrice(0)
        setBookPopUp(true)
    }


    const [Hotel] = useState([
        {
            id: 1, name: 'Deluxe Room', description: 'Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo, in suscipit urna condimentum sed. Vivamus augue enim, consectetur ac interdum a, pulvinar ac massa. Nullam malesuada congue',
            price: 200, duration: 'Day'
        },
        {
            id: 2, name: 'Superior Room', description: 'Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo',
            price: 230, duration: 'Night'
        },
        {
            id: 3, name: 'Premium Bora', description: 'Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo',
            price: 300, duration: 'Night'
        },
        {
            id: 4, name: 'D’Morvie Suites', description: 'Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo',
            price: 250, duration: 'Day'
        },
    ])

    let addPopUp = (
        <div className={popup.popup}>
            <div className={popup.header}>
                <h3>R {HotelData.fee}</h3>
            </div>
            <div className={popup.formGroup}>
                <label>Check-in Date <span>*</span></label>
                <input type="date" name="checkIn" className={popup.formControl} onChange={(e) => setcheckIn(e.target.value)} />
            </div>

            <div className={popup.formGroup}>
                <label>Check-out Date <span>*</span></label>
                <input type="date" name="checkOut" className={popup.formControl} onChange={(e) => setcheckOut(e.target.value)} />
            </div>

            <div className={popup.formGroup}>
                <label>Adult</label>
                <input type="number" name="adult" className={popup.formControl} onChange={(e) => setadult(e.target.value)} />
            </div>

            <div className={popup.formGroup}>
                <label>Children</label>
                <input type="number" name="child" className={popup.formControl} onChange={(e) => setchild(e.target.value)} />
            </div>
            R {TotalPrice}<br />
            <Link to={{pathname:'./pay', state:{dataHotel:HotelData}}} type="button" className={popup.submitAvailability} onClick={checkInNow}>Check Out</Link>
            {/* <button type="button" className={popup.submitAvailability} onClick={checkInNow}>Check Out</button> */}

        </div>



    )


    return (

        <body>
            <div class='hotel'>
                <header>


                    <nav >
                        <a href="/home">Home</a> |

                        <a href="/hotels"> Rooms</a> |

                        <a href="#falicility">Services</a> |
                        <a href="galary">Gallery</a> |
                        <a href="/bookingHistory">Booking History</a> |
                        <a href="#contacts">Contacts</a> |
                        <button class="navBtn">Log Out</button>

                    </nav>

                </header>

                <div className='hotels-details'>
                    <h2>Select Category</h2>
                    <div className='hotel-display'>
                        {hotelDetails.map((doc, index) => (
                            <div className='hotel-display-info' key={doc.id}>
                                <div className='hotel-image'>
                                    <img src={hotelImage} alt='image' />
                                </div>
                                <div className='hotel-data'>
                                    <h2>{doc.roomType}</h2>
                                    <h4>{doc.bedType}</h4>
                                    <p>{doc.location}</p>
                                    <p>Maximum People: <b>2</b></p>
                                    <div className='hotel-data-footer'>
                                        <p>from <br /> <b>R {doc.fee}</b> per night</p>
                                        <button onClick={() => bookNow(doc)}>Book</button>
                                    </div>
                                    <Popup trigger={BookPopUp} setTrigger={setBookPopUp}>
                                        {addPopUp}
                                    </Popup>
                                </div>
                            </div>

                        ))}
                        <div>
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

export default Hotels