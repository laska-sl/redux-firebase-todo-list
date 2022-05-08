import { FC } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ProfileMenu from "./ProfileMenu";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";

const Header: FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ToDo List
        </Typography>

        {user && <ProfileMenu />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
