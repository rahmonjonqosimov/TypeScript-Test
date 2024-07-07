import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import "./index.scss";
import { useGetUsersQuery } from "../../services/userApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface SignInSchema {
  username: string;
  password: string;
}

const SignInComponent: React.FC = () => {
  const { data: users, isLoading } = useGetUsersQuery({ url: "/users" });
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("ok");
    const formData = new FormData(e.currentTarget);

    let username = formData.get("username") as string | null;
    let password = formData.get("password") as string | null;

    if (username?.trim() && password?.trim()) {
      const isLogin =
        users?.filter(
          (user: SignInSchema) =>
            user.username === username && user.password === password
        ) || [];

      if (isLogin.length) {
        localStorage.setItem("x-auth-token", "qwertyuiopasdfghjklzxcvbnm");
        toast.success("Welcome");
        navigate("/books");
      } else {
        return toast.error("Username and password are incorrect!");
      }
    } else {
      return toast.warning("Enter username and password!");
    }
  };

  return (
    <div className="sign-in">
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
            Sign in
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, p: "10px", background: "#6200EE" }}
            >
              {isLoading ? "Loading..." : " Sign In"}
            </Button>
          </Box>
          <span>
            Already signed up? <Link to={"/sign-up"}>Go to sign up.</Link>
          </span>
        </Box>
      </Container>
    </div>
  );
};

export default SignInComponent;
