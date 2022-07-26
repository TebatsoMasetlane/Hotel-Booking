import { useState, useEffect } from 'react';
import { db } from '../config/firebase'
import { storage } from '../config/firebase'
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage'
import { v4 } from 'uuid';
import { addDoc, getDocs, collection } from 'firebase/firestore'

function Add() {
    const collectionRef = collection(db, "Hotel");

    const [hotelDetails, setHotelDetails] = useState([]);

    const [uploadImage, setUploadImage] = useState(null)
    const [fee, setFee] = useState(0);
    const [roomType, setRoomType] = useState('');
    const [bedType, setBedType] = useState('');
    const [location, setLocation] = useState('');
    const [progress, setprogress] = useState(0)
    let [hotelImage, sethotelImage]= useState('')
    const file = ''

    const getAllHotels = () => {
        return getDocs(collectionRef);
    }
    useEffect(() => {
        getHotels();
    }, []);

    const handleImage = (e) => {
        setUploadImage(e.target.files[0])
        uploadedimage(uploadImage)
    }

    function uploadedimage(uploadImage) {
        if (!uploadImage) return;
        const imageRef = ref(storage, `images/${uploadImage.name + v4()}`);
        const uploadTask = uploadBytesResumable(imageRef, uploadImage);
        uploadTask.on('state_changed', (snapshot) => {
            const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100)
            setprogress(prog)
        }, (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => {
                        sethotelImage(url)
                    })

            }
        )
    }
    const getHotels = async () => {
        const data = await getAllHotels();
        console.log(data.docs)
        setHotelDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    const add = (() => {
    
        const hotelD = {
            fee: fee,
            roomType: roomType,
            bedType: bedType,
            location: location,
            hotelImage:hotelImage
        };

        addDoc(collectionRef, hotelD).then(() => {
            alert("added successfully")
        }).catch((err) => {
            console.log(err)
        })

    })
    return (

        <body>

            
					

        <div  className='details'>
                   <nav >
						<a  href="/Adminhome">Home</a> | 
							<a href="/hotels"> Rooms</a> |
							<a href="/add">Bookings</a> |
							<button  class="navBtn">Log Out</button>
					
					</nav>
            <center>
                <h1>Add Room Details</h1>
                <div className='formRoom'>
                    <input className='dinput' type='file' onChange={handleImage} name="uploadImage" value={file} />
                    {progress} %
                    <select className='select' onChange={(e) => setRoomType(e.target.value)}>
                        <option value=''>Select Room Type</option>
                        <option value='Deluxe Room'>Deluxe Room</option>
                        <option value='Premium Room'>Premium Room</option>
                        <option value='D’Morvie Suites'>D’Morvie Suites</option>
                        <option value='Superior Room'>Superior Room</option>
                    </select>

                    <select className='select' onChange={(e) => setBedType(e.target.value)}>
                        <option value=''>Select bed Type</option>
                        <option typeof='text' value='King Size Bed'>King Size Bed</option>
                        <option value='Double Size Bed'>Double Size Bed</option>
                        <option value='Triple Size Bed'>Triple Size Bed</option>
                    </select>
                    <input className='dinput' type="text" placeholder='Location' onChange={(e) => setLocation(e.target.value)} />
                    <input className='dinput' type='number' placeholder='Total Fee' onChange={(e) => setFee(e.target.value)} />

                    <button className='fbtn' onClick={add}>Add Details</button>
                </div>
            </center>
            <center>
                <h1>Details</h1>
                <table id='ftable'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Type</th>
                            <th>Bed Type</th>
                            <th>Location</th>
                            <th>Total Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotelDetails.map((doc, index) => {
                            return (
                                <tr key={doc.id}>
                                    <td>{index + 1}</td>
                                    <td>{doc.roomType}</td>
                                    <td>{doc.bedType}</td>
                                    <td>{doc.location}</td>
                                    <td>R{doc.fee}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </center>
   
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
export default Add;