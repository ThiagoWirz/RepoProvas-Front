import { Container } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import ButtonBox from "../../components/ButtonBox";
import TestByDisciplines from "../../components/Tests/Disciplines";

export default function HomePage() {
  const { auth } = useAuth();
  const [selected, setSelected] = useState("DISCIPLINA");

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
        {selected === "DISCIPLINA" && <TestByDisciplines />}
        {selected === "PESSOA INSTRUTORA" && <h1>MIAJUDA2</h1>}
        {selected === "ADICIONAR" && <h1>MIAJUDA3</h1>}
      </Container>
    </Container>
  );
}
