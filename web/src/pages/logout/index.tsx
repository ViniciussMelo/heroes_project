import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const sendToLogin = () => {
    navigate('/login');
  }

  useEffect(() => {
    localStorage.removeItem('username');

    sendToLogin();
  }, []);

  return (
    <>
    </>
  )
}

export default Logout;