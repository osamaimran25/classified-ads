import { Helmet } from "react-helmet";
import { useHistory } from "react-router";
import Footer from "./Footer/Footer";
import Navbar from "./Menu/Navbar";
import SecondMenu from "./SecondMenu/SecondMenu";

const Layout = ({ children, pageTitle, hindMenu }) => {
  const history = useHistory();

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div style={{ marginBottom: "72px" }}>
        <Navbar />
      </div>
      {history.location.pathname !== "/HelpCenter" && (
        <>{!hindMenu && <SecondMenu />}</>
      )}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
