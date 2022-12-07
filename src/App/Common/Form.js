import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import axios from "axios";

function Form() {
  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 400,
    margin: "20px auto",
    backgroundColor: "#F5F5F5",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [name, setName] = useState("");

  const nameChangeHadler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: name,
      })
      .then((parameters) => {
        console.log(parameters, "parameter in post axios");
        localStorage.setItem("isUserLogin", 1);
        return;
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <div>
          <Grid>
            <Avatar style={avatarStyle}></Avatar>
            {/* <h2>Register</h2> */}
          </Grid>

          <form onSubmit={submitHandler}>
            <TextField
              label="Name"
              placeholder="Fill with your name"
              //   variant="outlined"
              type="text"
              value={name}
              onChange={nameChangeHadler}
              fullWidth
            />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Register
            </Button>
          </form>
        </div>
      </Paper>
    </Grid>
  );
}
export default Form;
