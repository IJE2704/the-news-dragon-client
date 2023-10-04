import React, { useEffect, useState } from 'react';

const LeftNav = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h1>Left nav</h1>
        </div>
    );
};

export default LeftNav;