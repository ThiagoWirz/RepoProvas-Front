import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function ButtonBox({ selected, setSelected }: any) {
  return (
    <ToggleButtonGroup
      color="primary"
      value={selected}
      onChange={(e: any) => setSelected(e.target.value)}
      fullWidth={true}
    >
      <ToggleButton value="DISCIPLINA">DISCIPLINA</ToggleButton>
      <ToggleButton value="PESSOA INSTRUTORA">PESSOA INSTRUTORA</ToggleButton>
      <ToggleButton value="ADICIONAR">ADICIONAR</ToggleButton>
    </ToggleButtonGroup>
  );
}
