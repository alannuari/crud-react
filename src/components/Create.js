import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

const Create = ({ getData }) => {

  const [name, setName] = useState('');
  const [tag, setTag] = useState('');

  const sendDataToAPI = () => {
    axios.post('https://62bdc90cbac21839b60b2419.mockapi.io/users', {
      name,
      tag,
      image: 'https://i.postimg.cc/C5h8jVPT/default.jpg',
    }).then(() => {
      getData();
    });
  };

  return (
    <div className='form-input'>
      <h1>Aplikasi Kontak</h1>
      <h2>Tambah Kontak</h2>
      <Form>
        <Form.Field>
            <label>Nama Lengkap</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Nama Lengkap' />
        </Form.Field>
        <Form.Field>
            <label>Tag</label>
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} placeholder='Tag' />
        </Form.Field>
        <button type="submit" onClick={sendDataToAPI} className="ui button">Save</button>
      </Form>
    </div>
  );
}

export default Create;
