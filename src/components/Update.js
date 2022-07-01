import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const Update = () => {

  const [data, setData] = useState({
    name: '',
    tag: ''
  });
  const history = useNavigate();

  const updateDataAPI = (id) => {
    axios.put(`https://62bdc90cbac21839b60b2419.mockapi.io/users/${id}`, data).then(() => {
        history('/');
    });
  };

  const onChangeNameHandler = (e) => {
    setData({
        ...data,
        name: e.target.value,
    });
  };
  const onChangeTagHandler = (e) => {
    setData({
        ...data,
        tag: e.target.value,
    });
  };

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('CONTACT_ITEM')));
  }, []);

  return (
    <div className='form-update'>
      <h2>Update Data</h2>
      <Form>
        <Form.Field>
            <label>Nama Lengkap</label>
            <input type="text" value={data.name} onChange={(e) => onChangeNameHandler(e)} placeholder='Nama Lengkap' />
        </Form.Field>
        <Form.Field>
            <label>Tag</label>
            <input type="text" value={data.tag} onChange={(e) => onChangeTagHandler(e)} placeholder='Tag' />
        </Form.Field>
        <button type="submit" onClick={() => updateDataAPI(data.id)} className="ui button">Save</button>
      </Form>
    </div>
  );
}

export default Update;
