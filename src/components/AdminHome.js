import React from 'react'
import {Link} from 'react-router-dom';
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
import a1 from '../images/a1.jpg'
import a2 from '../images/a2.jpg'
import '../style.css'

function AdminHome() {
  return (
    <body>
	<div id="fh5co-wrapper">
	<div id="fh5co-page">
	<div id="fh5co-header">
		<header>
			
				
					<nav >
						<a  href="#AdminHome">Home</a> | 
							<a href="/add"> Rooms</a> |
							<a href="/booking">Bookings</a> |
							<button  class="navBtn">Log Out</button>
					</nav>
				
		</header>
		
	</div>
	
	<div id="AdminHome" class="js-fullheight">
		<div  class="fullheight" style={{ backgroundImage: `url(${pic})` }}>
			
	
		   		
		   		<div class="container">
		   			
		   				
		   					<div class="desc1">
		   						<p><span>Descovery Hotel</span></p>
		   						<h2>Reserve Room for Family Vacation</h2>
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

export default AdminHome





