import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
} from "@mui/material";
import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import * as api from "../../../services/api";
import { BsChevronExpand } from "react-icons/bs";

export default function TestByTeachers() {
  const [data, setData] = useState([]);
  const { auth } = useAuth();

  async function getTests() {
    const response = await api.getTestsByTeachers(auth.token);
    setData(response.data);
  }

  useEffect(() => {
    getTests();
  }, []);

  return (
    <>
      {data.map((info: any) => (
        <Accordion sx={{ width: "100%" }} key={info.id}>
          <AccordionSummary expandIcon={<BsChevronExpand />}>
            {info.name}
          </AccordionSummary>
          {info.categories.map(
            (category: any) =>
              category.Test.length !== 0 && (
                <AccordionDetails key={category.id} sx={{ px: 4 }}>
                  {category.name}
                  <br />
                  {category.Test.map((cTest: any) => (
                    <Link
                      sx={{
                        fontSize: 10,
                        color: "#808080",
                      }}
                      key={category.id}
                      href={cTest.pdfUrl}
                    >
                      {cTest.name} - ({cTest.teacherDiscipline.discipline.name})
                      <br />
                    </Link>
                  ))}
                </AccordionDetails>
              )
          )}
        </Accordion>
      ))}
    </>
  );
}
