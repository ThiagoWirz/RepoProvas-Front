import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "../../assets/Logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import * as api from "../../services/api";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormaData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  function handleInputChange(event: any) {
    setFormaData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    try {
      const promise = await api.signUp(formData);
      if (!promise) {
        alert("Password does not match");
      } else {
        navigate("/");
      }
    } catch (error: any) {
      console.log({ error });
      alert(error.response.data);
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            marginTop: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <Button
              color="primary"
              fullWidth
              variant="contained"
              sx={{ mt: 0, mb: 0 }}
            >
              <GitHubIcon sx={{ mr: 1 }} />
              <Typography sx={{ mt: 0 }} component="h1" variant="button">
                Entrar com o GitHub
              </Typography>
            </Button>
          </Grid>
          <Grid item sx={{ mt: 4, mb: 4 }}>
            <Divider>ou</Divider>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                name="email"
                type="text"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                InputLabelProps={{
                  color: "secondary",
                }}
                fullWidth
                required
                disabled={loading}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleInputChange}
                InputLabelProps={{
                  color: "secondary",
                }}
                fullWidth
                required
                disabled={loading}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="confirmPassword"
                label="ConfirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                InputLabelProps={{
                  color: "secondary",
                }}
                fullWidth
                required
                disabled={loading}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} alignContent="center">
            <Grid item xs={12} sm={6} alignSelf="left">
              <Typography
                component="p"
                variant="overline"
                sx={{ mt: 2, mb: 0 }}
                color="secondary"
                onClick={() => {
                  navigate("/");
                }}
              >
                Já possuo cadastro
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} alignSelf="right">
              {loading ? (
                <LoadingButton
                  loading
                  sx={{ mt: 2, mb: 1 }}
                  loadingPosition="start"
                  startIcon={<SaveIcon />}
                  variant="contained"
                >
                  Entrar
                </LoadingButton>
              ) : (
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ mt: 2, mb: 1 }}
                  type="submit"
                  disabled={loading}
                >
                  <Typography>Cadastrar</Typography>
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
