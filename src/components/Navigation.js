import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Switch,
  FormControlLabel,
} from "@mui/material";
import AdminView from "./AdminView";
import UserView from "./UserView";
import Widgets from "./Widgets";

const Navigation = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  const handleToggle = () => {
    setIsAdmin((prev) => !prev);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#0b0b0c" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#7f7f7f" }}>
            Inventory stats
          </Typography>
          <Box>
            <FormControlLabel
              control={
                <Switch
                  checked={!isAdmin}
                  onChange={handleToggle}
                  color="#6e7f2c"
                />
              }
              label={isAdmin ? "Admin" : "User"}
              labelPlacement="end"
              sx={{
                color: "#6e7f2c",
                "& .MuiTypography-root": {
                  textTransform: "capitalize",
                  color: "#6e7f2c",
                },
              }}
            />
          </Box>
        </Toolbar>
        <Widgets />
      </AppBar>
      {isAdmin ? <AdminView /> : <UserView />}
    </>
  );
};

export default Navigation;
