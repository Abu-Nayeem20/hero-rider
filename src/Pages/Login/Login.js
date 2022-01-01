import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';
import Header from '../Header/Header';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {loginWithEmailAndPassword, setUser, setLoading, setError, error} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/home';

    const handleLoginWithEmailAndPassword = e =>{
        loginWithEmailAndPassword(email,password)
        .then((res) => {
          setLoading(true)
            setUser(res.user);
            setError('');
            navigate(redirect_uri);
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => {
            setLoading(false)
          })
          e.preventDefault();
    }

    return (
        <div className='login-page'>
            <Header />
            <div className='loging-form'>
                <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <Form onSubmit={handleLoginWithEmailAndPassword}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={e => setEmail(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={e => setPassword(e.target.value)} type="password" required />
                </Form.Group>
                <button className='logout-btn' type='submit'>Login</button>
                </Form>
                    </div>
                </div>
                {error &&
            <div className='error-message'>
                <p>{error}</p>
            </div>}
                </div>
            </div>
            
        </div>
    );
};

export default Login;