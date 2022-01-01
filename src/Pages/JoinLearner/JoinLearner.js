import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';
import Header from '../Header/Header';

const JoinLearner = () => {

    const {createAccountWithMail, setUser, setError, error} = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [nidImg, setNidImg] = useState(null);
    const [profileImg, setProfileImg] = useState(null);
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
            navigate('/learner_profile');
        })
        .catch((error) => {
            setError(error.message);
        });
    };

    
    const handleLearnerJoin = e => {
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
            formData.append('nidImg', nidImg);
            formData.append('profileImg', profileImg);
            formData.append('vehicleType', vehicleType);

        
            fetch('http://localhost:5000/learners', {
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
    // console.log(error)
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
            <Form onSubmit={handleLearnerJoin}>
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
                <Form.Group controlId="formFile1" className="mb-3">
                <Form.Label>NID Photo</Form.Label>
                <Form.Control onChange={e => setNidImg(e.target.files[0])} type="file" accept='image/*' />
            </Form.Group>
                <Form.Group controlId="formFile2" className="mb-3">
                <Form.Label>Profile Photo</Form.Label>
                <Form.Control onChange={e => setProfileImg(e.target.files[0])} type="file" accept='image/*' />
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
                    label="Car"
                    value="car"
                    onChange={e => setVehicleType(e.target.value)}
                    name="group1"
                    type='radio'
                />
                <Form.Check
                    label="Bike"
                    value="bike"
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
        </div>
    );
};

export default JoinLearner;