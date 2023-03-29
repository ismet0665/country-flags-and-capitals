import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../img/logo.png";
const Header = () => {
  return (
    <Container>
      <Image src={logo} width={200}></Image>
      <h1 className="my-2 font-monospace display-6 fw-bold">
        Country Flags And Capitals
      </h1>
    </Container>
  );
};

export default Header;
