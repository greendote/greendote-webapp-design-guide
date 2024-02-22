import { CssBaseline, ThemeProvider } from '@mui/material';
import { GreendoteTheme } from './containers/GreendoteTheme';
import theme from './styles/theme';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <GreendoteTheme />
      </ThemeProvider>
    </>
  );
}

export default App;
