import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SingleLearner from './SingleLearner';

const LearnerUsers = () => {
    const [learners, setLearners] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/learnerUsers")
        .then(res => res.json())
        .then(data => {
            setLearners(data);
            console.log("Hitted")
        })
    }, []);
    return (
        <div>
            <DashboardHeader />
            <div>
            <div className='container-fluid'>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Status</th>
                <th>Role</th>
                <th>Action</th>
                <th>Make Admin</th>
                </tr>
            </thead>
            <tbody>
                {
                   learners.map(learner => <SingleLearner
                   key={learner._id}
                   learner={learner}
                   ></SingleLearner>)
                }
            </tbody>
            </Table>
            </div>
            </div>
        </div>
    );
};

export default LearnerUsers;