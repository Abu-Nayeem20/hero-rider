import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Header from '../Header/Header';
import './JoinRider.css';
import useAuth from '../../Firebase/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const JoinRider = () => {

    const {createAccountWithMail, setUser, error, setError} = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [drivingLicenceImg, setDrivingLicenceImg] = useState(null);
    const [area, setArea] = useState('');
    const [nidImg, setNidImg] = useState(null);
    const [profileImg, setProfileImg] = useState(null);
    const [carName, setCarName] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carNamePlate, setCarNamePlate] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

        const createAccount = (email, password) => {
            createAccountWithMail(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                navigate('/rider_profile');
            })
            .catch((error) => {
                setError(error.message);
            });
        };

        const handleRiderJoin = e => {
            e.preventDefault();
    
            if(password !== confirmPassword){
                setError("Password Not Matched");
                return;
            }
    
            const formData = new FormData();
                formData.append('name', name);
                formData.append('email', email);
                formData.append('age', age);
                formData.append('address', address);
                formData.append('phone', phone);
                formData.append('drivingLicenceImg', drivingLicenceImg);
                formData.append('area', area);
                formData.append('nidImg', nidImg);
                formData.append('profileImg', profileImg);
                formData.append('carName', carName);
                formData.append('carModel', carModel);
                formData.append('carNamePlate', carNamePlate);
                formData.append('vehicleType', vehicleType);
    
            
                fetch('https://stark-island-55310.herokuapp.com/riders', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setError('');
                    setSuccess("Joined Successfully");
                    createAccount(email, confirmPassword);
                    e.target.reset();
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    

    return (
        <div className='join-rider-page'>
            <div className="container">
            <Header />
           <div className='join-hero-rider'>
           <div className="row">
                <div className="col-md-8 bg-light offset-md-2 shadow-lg py-5 px-5 rounded">
                <div className='page-title'>
                <h2>Join With Us</h2>
            </div>
            <div className="join-form">
            <Form onSubmit={handleRiderJoin}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control onChange={e => setName(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={e => setEmail(e.target.value)} type="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control onChange={e => setAge(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onChange={e => setAddress(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control onChange={e => setPhone(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Driving Licence Photo</Form.Label>
                <Form.Control onChange={e => setDrivingLicenceImg(e.target.files[0])} type="file" accept='image/*' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                    <Form.Label>Area</Form.Label>
                    <Form.Control onChange={e => setArea(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group controlId="formFile1" className="mb-3">
                <Form.Label>NID Photo</Form.Label>
                <Form.Control onChange={e => setNidImg(e.target.files[0])} type="file" accept='image/*' />
            </Form.Group>
                <Form.Group controlId="formFile2" className="mb-3">
                <Form.Label>Profile Photo</Form.Label>
                <Form.Control onChange={e => setProfileImg(e.target.files[0])} type="file" accept='image/*' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
                    <Form.Label>Car Info</Form.Label>
                    <Form.Control onChange={e => setCarName(e.target.value)} type="text" required placeholder='Name' className="mb-3"/>
                    <Form.Control onChange={e => setCarModel(e.target.value)} type="text" required placeholder='Model' className="mb-3"/>
                    <Form.Control onChange={e => setCarNamePlate(e.target.value)} type="text" required placeholder='Name Plate' className="mb-3"/>
                </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={e => setPassword(e.target.value)} type="password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={e => setConfirmPassword(e.target.value)} type="password" required />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Vehicle Type</Form.Label>
                <Form.Check
                    label="car"
                    value="Car"
                    onChange={e => setVehicleType(e.target.value)}
                    name="group1"
                    type='radio'
                />
                <Form.Check
                    label="bike"
                    value="Bike"
                    onChange={e => setVehicleType(e.target.value)}
                    name="group1"
                    type='radio'
                />
                </Form.Group>
                <button type='submit'>Submit</button>
                </Form>
            </div>
           
                </div>
            </div>
           </div>
           {error &&
            <div className='error-message'>
                <p>{error}</p>
            </div>}
            {success &&
            <div className='error-message'>
                <p>{success}</p>
            </div>}
            </div>
        </div>
    );
};

export default JoinRider;