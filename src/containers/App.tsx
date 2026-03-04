import { Outlet } from 'react-router';
import { Header } from '../components/Header';

export function App(): React.JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
