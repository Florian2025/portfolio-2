import { Accordions } from "./Accordions";
import { Container } from "./Container";

const Faq = () => {
  const accordion = [
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, temporibus.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, temporibus.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, temporibus.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, temporibus.",
    },
  ];
  return (
    <div>
      <div className="text-center max-w-2xl mx-auto space-y-4 Accordions">
        <div className=" text-center flex flex-col gap-4">
          <h1> Frequently Asked Questions</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
            laboriosam doloremque ratione perspiciatis, cupiditate ab odit
            laudantium quod natus quis?
          </p>
        </div>
      </div>
      <Container className="flex flex-wrap justify-between py-10 ">
        <div className=" text-center md:text-start max-w-2xl mx-auto  md:w-1/2">
          {accordion.map(({ question, answer }) => (
            <Accordions question={question} answer={answer} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Faq;
