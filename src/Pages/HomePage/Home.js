import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div className='home-area'>
            <Header />
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="row">
                                <div className="col-6">
                                    <div className='join-rider'>
                                        <Link to="/join_rider">
                                            <button>Join as a Rider</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='join-learner'>
                                    <Link to="/join_learner">
                                            <button>Join as a Driving Lesson Learner</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;