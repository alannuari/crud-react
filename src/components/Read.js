import React from 'react';
import ReadItem from './ReadItem';

const Read = ({ contacts, getData }) => {
    return (
        <div>
            {contacts.map((contact) => (
                <ReadItem key={contact.id} getData={getData} {...contact} />
            ))}
        </div>
    );
}
 
export default Read;