import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { TextField, Button, Box, Typography, Paper, IconButton, InputAdornment  } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
  if (phone.length < 10) {
    setError("please enter a valid phone number.");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters long.");
    return;
  }

  if (login(`+${phone}`, password)) {
    navigate("/main");
  } else {
    setError("Invalid credentials. Try again.");
  }
};


  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      {/* Animated background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          border: 2,
          background:"",
          zIndex: 0,
        }}
      />

      {/* Login box with black & backdrop filter */}
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          maxWidth: 400,
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          bgcolor: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(5px)",
          color: "white",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        {/* Phone input */}
       <PhoneInput
        country={"us"}
        value={phone}
        onChange={setPhone}
        borderRadius={8}
        containerClass="rp-container"
        inputClass="rp-control"
        buttonClass="rp-flag-btn"
        dropdownClass="rp-dropdown"
        inputStyle={{
          width: "100%",
          height: "55px",
          borderRadius: "8px",
          background: "rgba(0,0,0,0.6)",
          color: "white",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
        buttonStyle={{
          background: "rgba(0,0,0,0.6)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "8px 0 0 8px",
        
        }}
        dropdownStyle={{
          background: "rgba(0,0,0,0.9)",
          color: "white",
          maxHeight: "200px",
          borderRadius: "8px",
        }}
      />
        {/* Password */}
        <TextField
          type={showPassword ? "text" : "password"}
          fullWidth
          variant="outlined"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            mt: 2,
            input: { color: "white" },
            label: { color: "gray" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "1px solid rgba(255, 255, 255, 0.2)" },
              "&:hover fieldset": { border: "1px solid rgba(255, 255, 255, 0.5)" },
              "&.Mui-focused fieldset": { border: "1px solid rgba(255, 255, 255, 0.5)" },
              borderRadius: 2,
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  sx={{ color: "white" }}
                >
                  {showPassword ? <Visibility />: <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          sx={{ mt: 3, py: 1.2, borderRadius: 2 }}
        >
          Login
        </Button>

        <Typography variant="body2" sx={{ mt: 2, color: "gray" }}>
          By signing in you agree to our{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            Terms
          </span>{" "}
          and{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            Services
          </span>.
        </Typography>
      </Paper>

      {/* Keyframes for animation */}
      <style>
        {`
          @keyframes moveBg {
            0% { transform: translate(0,0) scale(1); }
            50% { transform: translate(-20px, 20px) scale(1.1); }
            100% { transform: translate(20px, -20px) scale(1); }
          }
        `}
      </style>
    </Box>
  );
};

export default LoginPage;
