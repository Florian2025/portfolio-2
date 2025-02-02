import { useState } from "react";
import { Container } from "./Container";
import { GrAdd } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

export const Accordions = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4">
      <Container>
        <div className="">
          <div
            className="flex flex-wrap justify-between items-center  "
            onClick={() => setOpen(!open)}
          >
            <h2 className="p-3">{question}</h2>
            {open ? <GrClose /> : <GrAdd />}
          </div>
          <div>{open && <div>{answer}</div>}</div>
        </div>
      </Container>
    </div>
  );
};
