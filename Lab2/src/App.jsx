import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavAppBar from './Components/NavAppBar';
import './App.css';
import HERO from './Components/HERO';
import { Container } from '@mui/material';
import Card from './Components/Card';

const theme = createTheme({
  typography: {
    // fontFamily: 'Inter',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavAppBar />
        <HERO />
        <Card></Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;
