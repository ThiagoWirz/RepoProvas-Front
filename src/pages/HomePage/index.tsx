import { Container } from "@mui/material";
import { useState } from "react";
import ButtonBox from "../../components/ButtonBox";
import TestByDisciplines from "../../components/Tests/Disciplines";
import TestByTeachers from "../../components/Tests/Teachers";

export default function HomePage() {
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
        {selected === "PESSOA INSTRUTORA" && <TestByTeachers />}
        {selected === "ADICIONAR" && <h1>MIAJUDA3</h1>}
      </Container>
    </Container>
  );
}
