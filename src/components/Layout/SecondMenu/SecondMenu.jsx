import { Container } from "@material-ui/core";
import "./SecondMenu.scss";
// import ReactMegaMenu from "react-mega-menu";

const SecondMenu = () => {
  return (
    <div className="second_menu_wrapper">
      <Container>
        <h1>SecondMenu</h1>
        {/* <ReactMegaMenu tolerance={100} direction={"LEFT"} data={["home"]} /> */}
      </Container>
    </div>
  );
};

export default SecondMenu;
