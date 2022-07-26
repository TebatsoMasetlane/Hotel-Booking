import img from '../images/person-icon.png'
import LoginCSS from '../style.css';
import {Link} from 'react-router-dom';
import {auth} from '../config/firebase'
import React, {useState} from 'react'
import {useHistory } from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { sendPasswordResetEmail } from 'firebase/auth';

function AdminLog() {
    const[email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	let history = useHistory();
    const log = (() => {
      
        signInWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/Adminhome")
            console.log('logged in')

        }).catch((err)=> {
            console.log(err);
        })
        
    })
    const frgtPassword = (email) =>{


        return sendPasswordResetEmail(auth, email);
    }

  return (
    <body>
	
  
 <div class="box-login" >
 <header>
    <nav >
    <a href="/">Home</a> |
    <a href="#falicility">Services</a> |
    <a href="galary">Gallery</a> |
    <a href="#contacts">Contacts</a> |
    

 </nav>

</header> 
       
    <h1>Welcome To Discovery Hotel</h1>
     <img src={img} id="icon"/> 
    <input type="email" name="" placeholder="Username" onChange={(event) => 
          setEmail(event.target.value)}/>
    <input type="password" name="" placeholder="Password" onChange={(event) => 
          setPassword(event.target.value)}/>
    <span class="psw">Forgot <a href="#">Password?</a></span>
     <p>Need an account? <Link to={"/signup"}> SIGN UP</Link></p>
    <button onClick={log} type ="submit" id="being"> Login </button>
    
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

export default AdminLog
