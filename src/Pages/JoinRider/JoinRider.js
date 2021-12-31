import React from 'react';
import { Form } from 'react-bootstrap';
import Header from '../Header/Header';
import './JoinRider.css'

const JoinRider = () => {
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
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Driving Licence Photo</Form.Label>
                <Form.Control type="file" accept='image/*' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                    <Form.Label>Area</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
                <Form.Group controlId="formFile1" className="mb-3">
                <Form.Label>NID Photo</Form.Label>
                <Form.Control type="file" accept='image/*' />
            </Form.Group>
                <Form.Group controlId="formFile2" className="mb-3">
                <Form.Label>Profile Photo</Form.Label>
                <Form.Control type="file" accept='image/*' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
                    <Form.Label>Car Info</Form.Label>
                    <Form.Control type="text" required placeholder='Name' className="mb-3"/>
                    <Form.Control type="text" required placeholder='Model' className="mb-3"/>
                    <Form.Control type="text" required placeholder='Name Plate' className="mb-3"/>
                </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" required />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Vehicle Type</Form.Label>
                <Form.Check
                    label="Car"
                    name="group1"
                    type='radio'
                />
                <Form.Check
                    label="Bike"
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
            </div>
        </div>
    );
};

export default JoinRider;