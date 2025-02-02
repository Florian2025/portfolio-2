import { Button } from "./Button";
import { Container } from "./Container";
import group from "../assets/Group.svg";

export const Hero = () => {
  return (
    <div className="relative z-0">
      <Container className="relative  pt-10 md:pt-10 md:flex items-center ">
        <div className=" text-center md:text-start max-w-2xl mx-auto space-y-4">
          <h1 className=" text-4xl md:text-6xl font-bold text-primary">
            Build{" "}
            <span className="bg-gradient-to-r from-[#0059F7] to-[#689EF5] text-transparent bg-clip-text">
              Modern
            </span>{" "}
            Saas for Startups
          </h1>
          <p className="text-[#7e8bb6]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            inventore adipisci unde earum optio reiciendis distinctio vero nisi
            sapiente explicabo!{" "}
          </p>
          <div className="space-x-5 space-y-2">
            <Button theme="secondary" href="/#">
              Get Started
            </Button>
            <Button theme="primary" href="/#">
              Get Started
            </Button>
          </div>
        </div>
        <img
          src={group}
          alt=""
          className=" md:w-1/2 max-w-[80rem] mx-auto py-10 w-full"
        />
      </Container>
    </div>
  );
};
