import { ThemeProvider } from '@mui/material/styles';
import { Header, Landing } from './components';
import { materialTheme } from './theme';
import '@fontsource/inter';

const App = () =>
  <ThemeProvider theme={materialTheme}>
    <Header />
    <Landing />
  </ThemeProvider>

export default App;
