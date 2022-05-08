import { Button, TextField } from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../../services/authService";
import { auth } from "../../services/firebase";

interface NewAccountFormProps {}

const NewAccountForm: FC<NewAccountFormProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  const handleUsernameChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const handlePasswordChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleCreateClick = () => {
    registerWithEmailAndPassword(username, password);
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/list");
    }
  }, [user]);

  return (
    <>
      <TextField onChange={handleUsernameChanged} label="Email" />
      <TextField onChange={handlePasswordChanged} label="Password" type="password" />
      <Button onClick={handleCreateClick} disabled={!username || !password}>
        Create
      </Button>
    </>
  );
};

export default NewAccountForm;
