import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const date = new Date();
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword(!showPassword);
  return (
    <Container maxWidth="xs">
        <CssBaseline />
      <Box
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Avatar sx={{ bgcolor: "purple" }}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                autoFocus
                label="Email Address"
                id="email"
                name="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                sx={{ mx: 1 }}
                required
                label="Remember me"
                control={<Checkbox value='remember'  sx={{ mx: 2 }} color="primary" />}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit">
                Sign in
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Link variant="body2" sx={{ cursor: "pointer" }} underline="none">
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs={7}>
              <Link onClick={() => navigate('/signup')} variant="body2" sx={{ cursor: "pointer" }} underline="none">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box textAlign="center" marginY={3}>
        <Typography textAlign="center" variant="caption" color="gray">
          {"Copyright © "}
          <Link
            sx={{ cursor: "pointer" }}
            underline="none"
            variant="caption"
            color="gray"
          >
            {"Your Website "}
          </Link>
          {`${date.getFullYear()}.`}
        </Typography>
      </Box>
    </Container>
  );
}

export default Signin;
