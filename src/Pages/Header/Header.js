import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../../images/hero-logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';

const Header = () => {
    const {user} = useAuth();

    const [learner, setLearner] = useState({});
    const [rider, setRider] = useState({});

    useEffect( () => {
        const url = `https://stark-island-55310.herokuapp.com/learners?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setLearner(data);
        })
    }, [user.email]);

    useEffect( () => {
        const url = `https://stark-island-55310.herokuapp.com/riders?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setRider(data);
        })
    }, [user.email]);

    // console.log("Learner", learner)
    // console.log("Rider", rider)
    const selectUrl = () => {
        if(learner[0]){
            return "/learner_profile";
        }
        else if(rider[0]){
            return "/rider_profile";
        }
        else{
            return "/";
        }
    }

    // console.log(selectUrl())
    console.log(learner[0]?.role)

    return (
        <div className='header'>
            <Link to="/home"><img src={logo} alt="" /></Link>
            <div className='login-profile'>
                {user.email ?
                    <Link to={`${selectUrl()}`}>
                    <button>Profile</button>
                    </Link>
                    :
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                }
            </div>
            <div className='packages-btn'>
                {learner[0] && 
                <Link to="/packages">
                <button>Packages</button>
                </Link>

                }
            </div>
            <div className='dashboard-btn'>
                {learner[0]?.role === "Admin" ||  rider[0]?.role === "Admin" ?
                <Link to="/dashboard">
                <button>Dashboard</button>
                </Link>
                :
                <span></span>
                }
            </div>
        </div>
    );
};

export default Header;