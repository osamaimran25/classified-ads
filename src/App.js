import { ThemeProvider } from "@material-ui/styles";
import { useEffect } from "react";

import Routes from "./routes";
import theme from "./theme";
function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
