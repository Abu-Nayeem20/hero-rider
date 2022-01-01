import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SingleLearner = ({ learner }) => {
    // console.log(learner)
    const [newLearner, setNewLearner] = useState(learner);

    const {_id, name, email, phone, age, status, role} = newLearner;
    
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

        const url = `https://stark-island-55310.herokuapp.com/learnerUsers/${id}`;
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
                const updatedLearner = {...newLearner, status: updatedStatus };
                setNewLearner(updatedLearner);
            }
        })

    };

    const updateUserRole = (id, updatedRole) => {
       
        const updateRole = {role: updatedRole};

        const url = `https://stark-island-55310.herokuapp.com/learnerUsers/${id}`;
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
                const updatedLearner = {...newLearner, role: updatedRole };
                setNewLearner(updatedLearner);
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

export default SingleLearner;