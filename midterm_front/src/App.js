import './App.css';
import MainRoutes from './routes'
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  typography:{
    allVariants:{
      fontFamily:'Prompt'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
