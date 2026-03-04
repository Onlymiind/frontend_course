import cn from 'classnames';
import { NavLink, type NavLinkRenderProps } from 'react-router';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import type { StateValue } from '../store/store';

export function Header(): React.JSX.Element {
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

  const username = useSelector((state: StateValue) => state.username);
  console.log('Header: ' + username);
  return (
    <div className={styles.header}>
      <NavLink className={setLinkStyle} to='/films'>
        Фильмы
      </NavLink>
      <NavLink className={setLinkStyle} to='/favourites'>
        Избранное
      </NavLink>
      <NavLink className={setLinkStyle} to='/set_username'>
        Установить имя пользователя
      </NavLink>
      {username === '' ? <></> : <b className={styles.username}>{username}</b>}
    </div>
  );
}
