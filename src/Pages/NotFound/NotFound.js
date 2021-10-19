import React from 'react';
import notfound from '../../images/notfound/NotFound.PNG';
const NotFound = () => {
    return (
        <div className='d-flex justify-content-center mb-5'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;