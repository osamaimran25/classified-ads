import { ThemeProvider } from "@material-ui/styles";

import Routes from "./routes";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
