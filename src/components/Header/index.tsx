import Logo from "../../assets/Logo.png";
import { Grid, Avatar, Container, Divider } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { LogoutOutlined } from "@mui/icons-material";
import * as api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { auth, setAuthData } = useAuth();
  const navigate = useNavigate();

  async function logOut() {
    try {
      await api.logOut(auth.token);
      setAuthData(null);
      navigate("/");
    } catch (error: any) {
      console.log(error);
      alert(error.response.data);
    }
  }

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          padding: 2,
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {auth ? (
            <>
              <Grid item xs={12} sm={6} alignSelf="left">
                <img src={Logo} alt="RepoProvas" />
              </Grid>
              <Grid item xs={12} sm={6} alignSelf="right">
                <Avatar sx={{ m: 1, bgcolor: "#3F61d7" }}>
                  <LogoutOutlined onClick={logOut} />
                </Avatar>
              </Grid>
            </>
          ) : (
            <Grid
              container
              sx={{ paddingTop: 10 }}
              justifyContent="center"
              alignContent="center"
            >
              <img src={Logo} alt="RepoProvas" />
            </Grid>
          )}
        </Grid>
      </Container>
      {auth && <Divider />}
    </>
  );
}
