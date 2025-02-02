import { Container } from "./Container";
import logo from "../../public/logo.svg";

export const Footer = () => {
  return (
    <div className="p-10">
      <Container>
        <div className="grid md:grid-cols-3 gap-2 ">
          <div className="text-center flex gap-2 flex-col items-start">
            <img src={logo} alt="" width={32} height={32} />
            <p className="text-center ">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
          <div className="text-center">
            <h1 className=" font-bold">Contact</h1>
            <p className="text-center mt-5">
              1234 Main St. <br />
              Springfield, ST 54321 <br />
              123-456-7890 <br />
              <a href="mailto:email@email.com"></a>
            </p>
          </div>
          <div className="text-center">
            <h1 className=" font-bold">Social</h1>
            <p className="text-center mt-5">
              <a href="https://www.facebook.com">Facebook</a> <br />
              <a href="https://www.twitter.com">Twitter</a> <br />
              <a href="https://www.instagram.com">Instagram</a> <br />
            </p>
          </div>
        </div>

        <hr className="border-t mt-7 mb-5 border-[#1c243f]" />
        <div className="text-center">
          <p className="text-center mt-5">&copy; All rights reserved</p>
        </div>
      </Container>
    </div>
  );
};
