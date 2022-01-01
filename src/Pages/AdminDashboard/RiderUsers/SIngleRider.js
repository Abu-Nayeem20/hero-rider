import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SIngleRider = ({ rider }) => {
    // console.log(rider)
    const [newRider, setNewRider] = useState(rider);

    const {_id, name, email, phone, age, status, role} = newRider;
    
    const updateStatus = e => {
        const newStatus = e.target.value;
        updateUserStatus(_id, newStatus);
    } 

    const makeAdmin = e => {
        const role = e.target.value;
        updateUserRole(_id, role);
    }

    const updateUserStatus = (id, updatedStatus) => {
       
        const updateStatus = {status: updatedStatus};

        const url = `https://stark-island-55310.herokuapp.com/riderUsers/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                const updatedRider = {...newRider, status: updatedStatus };
                setNewRider(updatedRider);
            }
        })

    };

    const updateUserRole = (id, updatedRole) => {
       
        const updateRole = {role: updatedRole};

        const url = `https://stark-island-55310.herokuapp.com/riderUsers/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateRole)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                const updatedRider = {...newRider, role: updatedRole };
                setNewRider(updatedRider);
            }
        })

    };

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{age}</td>
            <td>{status}</td>
            <td>{role}</td>
            <td>
            <div>
            <Form.Select size="lg" className='' onChange={updateStatus}>
            <option>Active</option>
            <option>Block</option>
            </Form.Select>
            </div>
            </td>
            <td>
            <div>
            <Form.Select size="lg" className='' onChange={makeAdmin}>
            <option>User</option>
            <option>Admin</option>
            </Form.Select>
            </div>
            </td>
        </tr>
    );
};

export default SIngleRider;