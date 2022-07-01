import React, { useEffect, useState } from 'react';
import Create from './Create';
import Read from './Read';
import axios from 'axios';

const LayoutMaster = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get('https://62bdc90cbac21839b60b2419.mockapi.io/users')
            .then((result) => {
                setData(result.data);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div  className='container'>
            <Create getData={getData}/>
            <Read contacts={data} getData={getData} />
        </div>
    );
}
 
export default LayoutMaster;