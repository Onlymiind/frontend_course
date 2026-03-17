import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink, type NavLinkRenderProps } from 'react-router';
import type { StateValue } from '../store/store';
import cn from 'classnames';
import styles from './styles.module.css';
import { LiveTv } from '@mui/icons-material';

export function Header(): React.JSX.Element {
  const username = useSelector((state: StateValue) => state.username);
  const favourites = useSelector((state: StateValue) => state.favourites);
  const setLinkStyle = (statuses: NavLinkRenderProps): string => {
    if (statuses.isTransitioning) {
      return cn(styles.headerLink, styles.headerLinkTransitioning);
    } else if (statuses.isActive) {
      return cn(styles.headerLink, styles.headerLinkActive);
    } else if (statuses.isPending) {
      return cn(styles.headerLink, styles.headerLinkPending);
    } else {
      return styles.headerLink;
    }
  };

  return (
    <div className={styles.header}>
      <LiveTv className={styles.headerLink}></LiveTv>
      <NavLink className={setLinkStyle} to='/'>
        Главная
      </NavLink>
      <NavLink className={setLinkStyle} to='/films'>
        Фильмы
      </NavLink>
      {favourites.length > 0 ? (
        <Badge badgeContent={favourites.length}>
          <NavLink className={setLinkStyle} to='/favourites'>
            Избранное
          </NavLink>
        </Badge>
      ) : (
        <NavLink className={setLinkStyle} to='/favourites'>
          Избранное
        </NavLink>
      )}
      <NavLink className={setLinkStyle} to='/search_films'>
        Поиск фильма
      </NavLink>
      <NavLink className={setLinkStyle} to='/set_username'>
        Установить имя пользователя
      </NavLink>
      {username === '' ? <></> : <b className={styles.username}>{username}</b>}
    </div>
  );
}
