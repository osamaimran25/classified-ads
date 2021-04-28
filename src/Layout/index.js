import { Helmet } from "react-helmet";
import Footer from "./Footer/Footer";
import Navbar from "./Menu/Navbar";

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
