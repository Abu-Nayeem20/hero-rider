import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SIngleRider from './SIngleRider';

const RiderUsers = () => {
    const [riders, setRiders] = useState([]);

    useEffect( () => {
        fetch("https://stark-island-55310.herokuapp.com/riderUsers")
        .then(res => res.json())
        .then(data => {
            setRiders(data);
            // console.log("Hitted")
        })
    }, []);

    // console.log(riders)
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
                    riders.map(rider => <SIngleRider
                    key={rider._id}
                    rider={rider}
                    ></SIngleRider>)
                }
            </tbody>
            </Table>
            </div>
            </div>
        </div>
    );
};

export default RiderUsers;