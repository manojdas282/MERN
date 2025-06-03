import React from "react";
import { TextField, Button, Typography, Container } from "@mui/material";

export const ForgotPassword = () => {
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.taget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Forgot Password
      </Typography>
      <Typography variant="body2" gutterBottom>
        Enter your email to receive a password reset link.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={handleEmailChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!email}
        >
          Send Reset Link
        </Button>
      </form>
    </Container>
  );
};
