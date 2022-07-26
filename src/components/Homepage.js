
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import pic from "../images/i.jpg"
import pic2 from "../images/slider2.jpg"
import pic3 from "../images/slider3.jpg"
import hotel1 from "../images/g6.jpg"
import hotel2 from "../images/r2.jpg"
import hotel3 from "../images/g3.jpg"
import hotel4 from "../images/r1.jpg"
import img1 from "../images/image-1.jpg"
import img2 from "../images/image-2.jpg"
import img3 from "../images/image-3.jpg"
import img4 from "../images/image-4.jpg"
import img5 from "../images/image-5.jpg"
import img6 from "../images/image-6.jpg"
import '../style.css'
import './popbook.css'
import popup from './popup.module.css'
import a1 from '../images/a1.jpg'
import a2 from '../images/a2.jpg'
import Popup from './popup';


function Homepage() {
     

	const [BookPopUp, setBookPopUp] = useState(false)
	const [checkIn, setcheckIn] = useState('')
	const [checkOut, setcheckOut] = useState('')
	const [adult, setadult] = useState('')
	const [child, setchild] = useState('')
	const [HotelData, setHotelData] = useState({})
	let [TotalPrice, setTotalPrice] = useState(0)

	const [Hotel] = useState([
		{
			id: 1, name: 'Deluxe Room', description: 'Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo, in suscipit urna condimentum sed. Vivamus augue enim, consectetur ac interdum a, pulvinar ac massa. Nullam malesuada congue',
			image: hotel1, price: 200, duration: 'Day'
		},
		{
			id: 2, name: 'Superior Room', description: 'Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo',
			image: hotel2, price: 230, duration: 'Night'
		},
		{
			id: 3, name: 'Premium Bora', description: 'Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo',
			image: hotel3, price: 300, duration: 'Night'
		},
		{
			id: 4, name: 'D’Morvie Suites', description: 'Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo',
			image: hotel4, price: 250, duration: 'Day'
		},
	])

	useEffect(() => {
		if (checkIn !=='' && checkOut !=='') {
			var startDate = new Date(checkIn)
			var endDate = new Date(checkOut)
			setTotalPrice((endDate.getTime() - startDate.getTime()) / (24 * 3600 * 1000) * HotelData.price)
			console.log(TotalPrice)

		}
	})



	function checkInNow() {


	}

	function bookNow(data) {
		console.log(data)
		setHotelData(data)
		setcheckIn('')
		setcheckOut('')
		setchild('')
		setadult('')
		setTotalPrice(0)
		setBookPopUp(true)
	}

	let addPopUp = (
		<div className={popup.popup}>
			<div className={popup.header}>
				<h3>R {HotelData.price} </h3>
				<label>{HotelData.duration}</label>
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
			R {TotalPrice}<br/>
			<Link to={"./pay"}><button type="button" className={popup.submitAvailability} onClick={checkInNow}>Check Out</button></Link>
		
		</div>



	)

	return (

		<body>
			<div id="fh5co-wrapper">
				<div id="fh5co-page">
					<div id="fh5co-header">
						<header>
						

							<nav >
								<a href="#fh5co-hero">Home</a> |
								<a href="#featured-hotel">Rooms</a> |
								<a href="#falicility">Services</a> |
								<a href="galary">Gallery</a> |
								<a href="/bookingHistory">Booking History</a> |
								<a href="#contacts">Contacts</a> |
							<button  class="navBtn">Log Out</button>

							</nav>

						</header>

					</div>

					<div id="fh5co-hero" class="js-fullheight">
						<div class="fullheight" style={{ backgroundImage: `url(${pic})` }}>



							<div class="container">


								<div class="desc1">
									<p><span>Descovery Hotel</span></p>
									<h2>Reserve Room for Family Vacation</h2>
									<p>

										<a href="#featured-hotel" class="btn">Book Now</a>
									</p>
								</div>

							</div>

						</div>
					</div>
	<section class="about top" id="about">
    <div class="container flex">
      <div class="left">
        <div class="img">
          <img src={a1}alt="" class="image1"/>
          <img src={a2} alt="" class="image2"/>
        </div>
      </div>
      <div class="right">
	  <div class="heading">
          
          <h2>Welcome to Descovery Hotel</h2>
          <p>Is all about thinking  what really is special for our guests, what's different, and to give them a surprise that they are not used to.There is nothing like staying reception for real comfort. </p>
          <p>It is always a pleasant plessure to have you around. We give a special treat for Our People.Allow Us to Show You What We Can Offer.We improve hospitality performance.We Creating a deeper, friendlier, and enhanced experience for Our guests.</p>
          <button class="btn1">READ MORE</button>
        </div>
      </div>
    </div>
  </section>

		<div id="featured-hotel" class="fh5co-bg-color">
		<div class="container">
		<Link to={"./hotels"}><button class="btn2">View All</button></Link>
							<div class="row">
								<div class="col-md-12">
									<div class="div-title text-center">
										<h2>Rooms & Suits</h2>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="feature-full-2col">
								
									{Hotel.map((hotel, xid) => (
										<div class="f-hotel">
											<div class="image" >
												<div class="descrip text-center">
													<p><small>For as low as</small><span>R {hotel.price}/{hotel.duration}</span></p>
												</div>
											</div>

											<div class="desc" style={{ backgroundImage: `url(${hotel.image})` }}>
												<h3>{hotel.name}</h3>
												<p>{hotel.description}</p>
												<p><a class="btn btn-primary btn-luxe-primary" onClick={() => bookNow(hotel)}>Book Now <i class="ti-angle-right"></i></a></p>
											</div>
											<Popup trigger={BookPopUp} setTrigger={setBookPopUp}>
												{addPopUp}
											</Popup>
										</div>
									))}

								</div>


							</div>

						</div>
					</div>


					<div class="Locations">

						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.6493783324586!2d28.11470331562827!3d-25.449983139916267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfc7640d9e6cb5%3A0xa63a60f60db7559c!2sLingas%20Resort%20Soshanguve!5e0!3m2!1sen!2sza!4v1656937328861!5m2!1sen!2sza" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.9814757223917!2d29.07247591562307!3d-25.170103328843034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec0416cb4045ee1%3A0x3b3832d3e4bd12c5!2sLingas%20Resort!5e0!3m2!1sen!2sza!4v1656937839640!5m2!1sen!2sza" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.878193537244!2d29.147483815623563!3d-25.207329930309125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec039be5a28ac59%3A0xb0ec2f761ee5f177!2sBAUBA%20WATER%20PARK!5e0!3m2!1sen!2sza!4v1656938831588!5m2!1sen!2sza" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>

					<section class="wrapper top" id='services'>
    <div class="container">
      <div class="text">
        <h2>Our Services</h2>

        <div class="content">
          <div class="box flex">
            <i class="fas fa-swimming-pool"></i>
            <span>Swimming pool</span>
          </div>
          <div class="box flex">
            <i class="fas fa-dumbbell"></i>
            <span>Gym & yogo</span>
          </div>
          <div class="box flex">
            <i class="fas fa-spa"></i>
            <span>Spa & massage</span>
          </div>
          <div class="box flex">
            <i class="fas fa-ship"></i>
            <span>Boat Tours</span>
          </div>
          <div class="box flex">
            <i class="fas fa-swimmer"></i>
            <span>Surfing Lessons</span>
          </div>
          <div class="box flex">
            <i class="fas fa-microphone"></i>
            <span>Conference room</span>
          </div>
          <div class="box flex">
            <i class="fas fa-water"></i>
            <span>Diving & smorking</span>
          </div>
          <div class="box flex">
            <i class="fas fa-umbrella-beach"></i>
            <span>Private Beach</span>
          </div>
        </div>
      </div>
    </div>
  </section> 





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

				</div>

			</div>

		</body>
	)
}

export default Homepage;




