import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/hero-logo.png';
import './DashboardHeader.css'

const DashboardHeader = () => {
    return (
        <div className='dashboard-header'>
            <div className="container">
                <div className='headeer-logo'>
                    <Link to="/home">
                    <img src={logo} alt="" />
                    </Link>
                </div>
                <div className='navigation'>
                    <ul>
                        <li>
                            <Link to="/dashboard/rider_users">Rider Users</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/learner_users">Learner Users</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;