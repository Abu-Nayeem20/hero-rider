import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Packages.css'

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect( () => {
        fetch("https://stark-island-55310.herokuapp.com/packages")
        .then(res => res.json())
        .then(data => {
            setPackages(data);
        })
    }, [])
    return (
        <div className='packages-page'>
            <Header />
            <div className='package-items'>
                <div className="container">
                <div className="row">
                    {
                        packages.map(item => <div className='col-md-6'
                        key={item._id}
                        >
                        <div className='item'>
                            <h2>{item.title}</h2>
                            <img className='img-fluid' src={item.img} alt="" />
                            <h4>Duration: {item.duration}</h4>
                            <h4>Price: ${item.price}</h4>
                            <p>{item.desc}</p>
                            <Link to={`/payment/${item._id}`}>
                            <button>Buy Now</button>
                            </Link>
                        </div>
                        </div>)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;