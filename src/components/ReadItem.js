import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ReadItem = ({ name, tag, image, id, getData}) => {

    const onDelete = (id) => {
        axios.delete(`https://62bdc90cbac21839b60b2419.mockapi.io/users/${id}`)
            .then(() => {
                getData();
            });
    };

    const setDataToLocalStorage = ({ id, name, tag, image }) => {
        localStorage.setItem('CONTACT_ITEM', JSON.stringify({
            id: id,
            name: name,
            tag: tag,
            image: image,

        }));
    };

    return (
        <div className="contact-item">
            <div className='contact-item__content'>
                <div className="contact-item__image">
                    <img src={image} alt="contact avatar"/>
                </div>
                <div className="contact-item__body">
                    <h3 className="contact-item__title">{name}</h3>
                    <p className="contact-item__username">@{tag}</p>
                </div>
            </div>
            <div className='contact-item__action'>
                <Link to='/update'>
                    <button className="ui yellow button" onClick={() => setDataToLocalStorage({ id, name, tag, image })}>Update</button>
                </Link>
                <button className="ui red button" onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    );
}
 
export default ReadItem;