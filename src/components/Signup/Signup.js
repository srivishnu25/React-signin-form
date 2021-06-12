import React, { Component, useState } from 'react';
import {BrowserRouter as Router,Switch,Link,Route,Redirect, useParams} from "react-router-dom";
// import './Signup.css'
import 'antd/dist/antd.css';

// const Signup = () => {
//     return (<>
//     <form>
//         <label>Name : <input type="text"  placeholder="enter name"/></label>
//         <label>Email : <input type="mail" placeholder="enter email"/></label>
//         <label>Age : <input type="number" placeholder="enter age"/></label>
//         <label>Introduction : <textarea ></textarea></label>
//         <input type="submit"/>
//     </form>
//     </>  );
// }

import { Form, Input, InputNumber, Button } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Signup = () => {
    const [redirect, setRedirect] = useState(false)
  const onFinish = (values) => {
    console.log(values);
    localStorage.setItem('UserDetails',JSON.stringify(values))
    setRedirect(true)


  };

  return (<>
      {redirect&&<Redirect to='/home'/>}
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};



 
export default Signup;
