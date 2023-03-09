import {Link, Outlet} from 'react-router-dom';
import cl from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <header className={cl['header']}>
        <Link className={cl['header__link']} to="/">
          Посты
        </Link>
        <Link className={cl['header__link']} to="/contacts">
          Контакты
        </Link>
      </header>
      <main className={cl['main']}>
        <Outlet />
      </main>
      <footer className={cl['footer']}>2023</footer>
    </>
  );
};
