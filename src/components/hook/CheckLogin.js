import { useState, useEffect } from "react";

export const LoginStatus = () => {
  const [login, setLogin] = useState(false);
  const [checking, setChecking] = useState(true);
  //set auth when have be
  const user = localStorage.getItem('token');
  useEffect(() => {
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    setChecking(false);
  }, [user]);
  return { login, checking };
};