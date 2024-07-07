import React, { FormEvent, useEffect } from "react";
import "./index.scss";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface UserSchema {
  username: string;
  password: string;
}

import { useRegisterUserMutation } from "../../services/userApi";

const SignUpComponent: React.FC = () => {
  const navigate = useNavigate();
  const [registerUser, { isSuccess, isLoading }] = useRegisterUserMutation();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let username = formData.get("username") as string | null;
    let password = formData.get("password") as string | null;
    let confirmPassword = formData.get("confirm-password") as string | null;

    if (password?.trim() && username?.trim() && confirmPassword?.trim()) {
      if (password == confirmPassword) {
        const user: UserSchema = {
          username: username,
          password: password,
        };
        registerUser(user);
      } else {
        return toast.warning("Passwords did not match!");
      }
    } else {
      return toast.warning("Enter username and password!");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Successfully registered !`);
      localStorage.setItem("x-auth-token", "qwertyuiopasdfhjklzxcvbnm");
      navigate("/books");
    }
  }, [isSuccess]);

  return (
    <section className="sign-in">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{ fontSize: "36px", fontWeight: "700" }}
          >
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm password"
              type="password"
              id="confirm-password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, p: "10px", background: "#6200EE" }}
            >
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </Box>
          <span>
            Already signed up? <Link to={"/"}>Go to sign in.</Link>
          </span>
        </Box>
      </Container>
    </section>
  );
};

export default SignUpComponent;
