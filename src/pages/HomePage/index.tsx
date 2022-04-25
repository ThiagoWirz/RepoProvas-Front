import { Container } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import * as api from "../../services/api";
import ButtonBox from "../../components/ButtonBox";

export default function HomePage() {
  const { auth } = useAuth();
  const [tests, setTests] = useState([]);
  const [selected, setSelected] = useState("DISCIPLINA");

  async function getTests() {
    try {
      const response: any = await api.getTests(auth.token);
      setTests(response);
    } catch (error: any) {
      console.log(error.response);
      alert(error.response.data);
    }
  }

  useEffect(() => {
    getTests();
  }, []);
  console.log(selected);

  return (
    <Container component="main">
      <ButtonBox selected={selected} setSelected={setSelected} />
      <Container
        component="main"
        sx={{
          margintop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {selected === "DISCIPLINA" && <h1>MIAJUDA</h1>}
        {selected === "PESSOA INSTRUTORA" && <h1>MIAJUDA2</h1>}
        {selected === "ADICIONAR" && <h1>MIAJUDA3</h1>}
      </Container>
    </Container>
  );
}
