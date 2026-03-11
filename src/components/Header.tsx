import { Tab, Tabs } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router';
import type { StateValue } from '../store/store';
import styles from './styles.module.css';

export function Header(): React.JSX.Element {
  const location = useLocation();
  const username = useSelector((state: StateValue) => state.username);

  return (
    <Tabs value={location.pathname === '/' ? '/films' : location.pathname}>
      <Tab label='Фильмы' value='/films' to='/films' component={NavLink} />
      <Tab
        label='Избранное'
        value='/favourites'
        to='/favourites'
        component={NavLink}
      />
      <Tab
        label='Установить имя пользователя'
        value='/set_username'
        to='/set_username'
        component={NavLink}
      />
      {username === '' ? <></> : <b className={styles.username}>{username}</b>}
    </Tabs>
  );
}
