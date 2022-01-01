import React, { useEffect, useState } from 'react';
import useAuth from '../../../Firebase/Hooks/useAuth';
import Header from '../../Header/Header';

const LearnerProfile = () => {
    const {user, logOut} = useAuth();
    // console.log(user.email)
    const [myProfile, setMyProfile] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/learners?email=${user.email}`;
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
                            <h4>Address: {myProfile[0]?.address}</h4>
                            <div className='row my-5'>
                                <div className="col-md-6">
                                    <div>
                                        <h4>National ID</h4>
                                    <img src={`data:image/png;base64,${myProfile[0]?.nidImg}`} alt="User" />
                                    </div>
                                </div>
                            </div>
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

export default LearnerProfile;