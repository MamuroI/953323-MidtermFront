import './App.css';
import MainRoutes from './routes'
import { createTheme, ThemeProvider } from '@material-ui/core';
import { CoreProvider } from './core/controller';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Prompt',
      fontStyle: "normal",
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CoreProvider>
        <MainRoutes />
      </CoreProvider>
    </ThemeProvider>
  );
}

export default App;
