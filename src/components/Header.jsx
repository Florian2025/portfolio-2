import { Container } from "./Container";
import logo from "../../public/logo.svg";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import { Link } from "react-scroll";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b">
      <Container>
        <div className="flex justify-between items-center py-3 relative">
          <a href="/" className="flex flex-row gap-4">
            <img src={logo} alt="logo" width={32} height={32} />
            <h1>Portfolio</h1>
          </a>

          <ul
            onClick={() => setOpen(false)}
            className={
              open
                ? "top-[80px] right-0 absolute  text-center  font-primary flex flex-col  pt-10 z-10 bg-[#fff] w-[20rem] gap-10 px-10 pb-10 border"
                : "hidden md:flex gap-10 font-primary text-center cursor-pointer"
            }
          >
            <Link to="How" smooth={true} duration={300}>
              How does it work?
            </Link>
            <Link to="Accordions" smooth={true} duration={300}>
              FAQ
            </Link>
            <Link to="Branding" smooth={true} duration={300}>
              Brands
            </Link>
          </ul>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <GrClose /> : <GrMenu />}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
