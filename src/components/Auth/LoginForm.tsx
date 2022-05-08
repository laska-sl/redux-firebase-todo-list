import { Button, TextField } from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { logInWithEmailAndPassword } from "../../services/authService";
import { auth } from "../../services/firebase";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../redux/actionTypes/loadingStatusActions";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      dispatch(setIsLoading());
      return;
    }
    if (user) {
      navigate("/list");
    }
  }, [user]);

  const handleUsernameChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const handlePasswordChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleLoginClick = () => {
    logInWithEmailAndPassword(username, password);
  };

  return (
    <>
      <TextField onChange={handleUsernameChanged} label="Email" />
      <TextField onChange={handlePasswordChanged} label="Password" type="password" />
      <Button onClick={handleLoginClick} disabled={!username || !password}>
        Login
      </Button>
    </>
  );
};

export default LoginForm;
