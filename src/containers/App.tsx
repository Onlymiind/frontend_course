import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#393939',
    },
    secondary: {
      main: '#393939',
    },
  },
});

export function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}
