import { FC, SyntheticEvent, useState } from "react";

import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";

import { Box, Tab } from "@mui/material";
import LoginForm from "./LoginForm";
import NewAccountForm from "./NewAccountForm";

interface AuthProps {}

const Auth: FC<AuthProps> = () => {
  const [tabIndex, setTabIndex] = useState("1");

  const handleTabSwitched = (_: SyntheticEvent, newTabIndex: string) => {
    setTabIndex(newTabIndex);
  };

  return (
    <TabContext value={tabIndex}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleTabSwitched}>
          <Tab label="Login" value="1" />
          <Tab label="New Account" value="2" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <LoginForm />
      </TabPanel>
      <TabPanel value="2">
        <NewAccountForm />
      </TabPanel>
    </TabContext>
  );
};

export default Auth;
