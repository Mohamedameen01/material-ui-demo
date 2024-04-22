import {
  Avatar,
  Box,
  Button,
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
import { CheckBox } from "@mui/icons-material";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const date = new Date();
  const handlePasswordVisibilty = () => setShowPassword(!showPassword);

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box
        component="main"
        sx={{
          mt: 6,
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
          Signup
        </Typography>
        <Box component="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name="firstName"
                required
                fullWidth
                autoFocus
                label="First Name"
                id="firstName"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="lastName"
                required
                fullWidth
                label="Last Name"
                id="lastName"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                required
                fullWidth
                label="Email Address"
                id="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                type={showPassword ? "text" : "password"}
                required
                fullWidth
                label="Password"
                id="password"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePasswordVisibilty}>
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
                sx={{ mx: 2 }}
                required
                label="I want to receive inspiration, marketing promotions and updates via email."
                control={<CheckBox sx={{ mx: 2 }} color="primary" />}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{my:1}}
              >
                Signup
              </Button>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item sx={{ m: 1 }}>
                <Link
                  underline="none"
                  variant="body2"
                  sx={{ cursor: "pointer" }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box textAlign='center' marginY={3}>
        <Typography textAlign="center" variant="caption" color="gray">
          {"Copyright © "}
        <Link sx={{cursor:"pointer"}} underline="none" variant="caption" color="gray">
          {"Your Website "}
        </Link>
            {`${date.getFullYear()}.`}
        </Typography>
      </Box>
    </Container>
  );
}

export default Signup;
