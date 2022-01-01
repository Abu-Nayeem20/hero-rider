import React, { useEffect, useState } from 'react';
import useAuth from '../../Firebase/Hooks/useAuth';
import Header from '../Header/Header';
import './RiderProfile.css';

const RiderProfile = () => {
    const {user, logOut} = useAuth();
    // console.log(user.email)
    const [myProfile, setMyProfile] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/riders?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyProfile(data);
        })
    }, [user.email]);

    // console.log(myProfile[0])

    return (
        <div className='rider-profile-page'>
            <Header />
            <div className='my-profile-content'>
                <div className="container">
                <div className='profile-img'>
                        <div className='user-profile-img'>
                            <img src={`data:image/png;base64,${myProfile[0]?.profileImg}`} alt="User" />
                        </div>
                        <div className='profile-img-text'>
                            <h2>{myProfile[0]?.name}</h2>
                            <h4>{myProfile[0]?.email}</h4>
                            <h5><i className="fas fa-map-marker-alt"></i>  {myProfile[0]?.address}</h5>
                        </div>
                    </div>
                    <div className='profile-all-info'>
                        <div className='heading'>
                        <h2><i className="fas fa-user"></i> About Me</h2>
                        </div>
                        <div className='all-info-text'>
                            <h4>Name: {myProfile[0]?.name}</h4>
                            <h4>Email: {myProfile[0]?.email}</h4>
                            <h4>Phone: {myProfile[0]?.phone}</h4>
                            <h4>Age: {myProfile[0]?.age}</h4>
                            <h4>Area: {myProfile[0]?.area}</h4>
                            <h4>Address: {myProfile[0]?.address}</h4>
                            <div className='row my-5'>
                                <div className="col-md-6">
                                    <div>
                                        <h4>Driving Licence</h4>
                                    <img src={`data:image/png;base64,${myProfile[0]?.drivingLicenceImg}`} alt="User" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <h4>National ID</h4>
                                    <img src={`data:image/png;base64,${myProfile[0]?.nidImg}`} alt="User" />
                                    </div>
                                </div>
                            </div>
                            <h4>Car Name: {myProfile[0]?.carName}</h4>
                            <h4>Car Model: {myProfile[0]?.carModel}</h4>
                            <h4>Car Name Plate: {myProfile[0]?.carNamePlate}</h4>
                        </div>
                    </div>
                    <div>
                    <button onClick={logOut} className='logout-btn'>LogOut</button>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default RiderProfile;