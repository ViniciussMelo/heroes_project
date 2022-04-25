import React from 'react';
import { useNavigate } from 'react-router-dom';

import 'antd/dist/antd.css';
import './index.css';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import LoginService from '../../services/LoginService';

interface LoginInterface {
  username: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async ({ username, password }: LoginInterface) => {
    try {
      await LoginService.verify({ username, password });
      
      localStorage.setItem('username', username);

      navigate('/')
    } catch (err) {
      alert('Invalid password or email!');
    }
  }

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}>
        <Form
          name='normal_login'
          className='login-form'
          onFinish={onFinish}
        >
          <Form.Item
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' className='login-form-button'>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default Login;