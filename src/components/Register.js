import register from '../style.css';
import {Link, useHistory} from 'react-router-dom';
import React, {useState} from "react";
import {auth} from '../config/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth';

const Register= () =>
{

  const[email, setemail] = useState('')
  const [password, setpassword] = useState('')

    
  let history = useHistory();
    const reg= ()=>{
      createUserWithEmailAndPassword(auth ,email, password) .then(() => {
        history.push("/login");

      }).catch((error)=> {
        console.log(error);
      })
  }

return(
  <body >
	<div class="signup">
<header>
  <nav >
  <a href="/">Home</a> |
  <a href="#featured-hotel"> Rooms</a> |
  <a href="#falicility">Services</a> |
  <a href="galary">Gallery</a> |
  <a href="#contacts">Contacts</a> |


</nav>

</header>
    	<div class="cen">
        	<div class={register.register}>
          		<h1>Become a member of Discovery today</h1>
       		</div>

        	<input type="email"  placeholder="Email" onChange={(e) => 
         		setemail(e.target.value)}/>
        	<input type="password"  placeholder="Password" onChange={(e) => 
          	setpassword(e.target.value)}/>
         	<p>Already a User? <Link to={"/login"} id={register.login}> LOGIN </Link></p>
         	<button onClick={reg} class ="sign" id={register.Register}> Sign Up </button>
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
												<li><a href="#">123 506 9887</a></li>
												<li><a href="#">+277 6753 3638</a></li>
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
 );
}
export default Register;




