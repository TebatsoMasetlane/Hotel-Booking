import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../style.css'

function Payment() {

	

	return ( 
		<body >

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

			<div class="pay">

				<div class="conf">
					<h1>Confirm Your Payment</h1>
					<div class="first-row">
						<div class="owner">
							<h3>Owner</h3>
							<div class="input-field">
								<input type="text" />
							</div>
						</div>
						<div class="cvv">
							<div class="ccv">
								<h3>CVV</h3>
								<div class="input-field">
									<input type="word" />
								</div>
							</div>
						</div>
					</div>

					<div class="second-row">
						<div class="card-number">
							<h3>Card Number</h3>
							<div class="input-field">
								<input type="text" />
							</div>
						</div>
					</div>
					<div class="third-row">

						<div class="selection">
							<div class="date">
								<select name="months" id="months">
									<option value="Jan">Jan</option>
									<option value="feb">feb</option>
									<option value="march">March</option>
									<option value="April">April</option>
									<option value="May">May</option>
									<option value="June">June</option>
									<option value="July">July</option>
									<option value="Aug">August</option>
									<option value="Sept">Sept</option>
									<option value="Oct">Oct</option>
									<option value="Nov">Nov</option>
									<option value="Dec">Dec</option>
								</select>
								<select name="yers" id="yearss">
									<option value="2023">2023</option>
									<option value="2024">2024</option>
									<option value="2025">2025</option>
									<option value="2026">2026</option>
								</select>
							</div>
							<div class="cards">
								<img src="https://img.icons8.com/color/48/000000/visa.png" />
								<img src="https://img.icons8.com/color/48/000000/mastercard.png" />
								<img src="https://img.icons8.com/color-glass/48/000000/paypal.png" />
							</div>
						</div>
					</div>
					<div class="str">
						<a href="">Confirm</a>
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

export default Payment;