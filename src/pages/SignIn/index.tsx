import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { Box, Button, Container, CssBaseline, Divider, Grid, TextField, Typography  } from "@mui/material";
import Logo from "../../assets/Logo.png"
import GitHubIcon from "@mui/icons-material/GitHub"
import LoadingButton from "@mui/lab/LoadingButton"
import SaveIcon from "@mui/icons-material/Save"

export default function SignIn(){
  const [loading, setLoading] = useState(false)
  const [formData, setFormaData] = useState({
    email: "",
    password: ""
    })
  const navigate = useNavigate()

    function handleInputChange(event: any){
      setFormaData({...formData, [event.target.name]: event.target.value})
    }

    async function handleSubmit(event: any) {
      event.preventDeafault()
      setLoading(true)
      console.log(formData)

      try {
        navigate("/homePage")
      } catch (error) {
        alert("Algo deu errado")
        console.log(error)
      }
      setLoading(false)
    }

  return(
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <Grid item xs={12}>
            <img src={Logo} alt="RepoProvas"/>
          </Grid>
        <Box sx={{
          marginTop: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} sx={{mt: 2}}>
          <Grid item xs={12} sm={6}>
            <Button
              color="primary"
              fullWidth
              variant="contained"
              sx={{mt: 0, mb: 0}}
            >
              <GitHubIcon sx={{ mr:1 }}/>
              <Typography sx={{ mt: 0}} component="h1" variant="button">
                  Entrar com o GitHub
              </Typography>
            </Button>
          </Grid>
          <Grid item sx={{ mt:4, mb: 4}}>
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
                  color:"secondary"
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
                  color:"secondary"
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
                  sx={{ mt: 2, mb: 0}}
                  color="secondary"
                  onClick={() => {navigate("/signUp")}}
                  >
                    Não possue cadastro? Registra-se agora!
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} alignSelf="right">
                  {loading ? 
                    <LoadingButton
                      loading
                      sx={{mt: 2, mb:1}}
                      loadingPosition="start"
                      startIcon={<SaveIcon/>}
                      variant="contained"
                    >
                      Entrar
                    </LoadingButton>
                    :
                    <Button
                      color="secondary"
                      variant="contained"
                      sx={{mt: 2, mb: 1}}
                      type="submit"
                      disabled={loading}
                    >
                      <Typography>
                        Entrar
                      </Typography>
                    </Button>
                  }
                </Grid>
          </Grid>
        </Box>
      </Box>

    </Container>
  )
}