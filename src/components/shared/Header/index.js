import React, { useState } from 'react';
import history from '~/services/history';
import colors from '~/styles/colors';

import Logo from '~/assets/logo';
import { FiSearch, FiGlobe, FiChevronDown } from 'react-icons/fi';
import NavMobile from '~/components/shared/NavMobile';

import { Container, FormSearch, Navbar } from './styles';

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [menu, setMenu] = useState('');

  function openMenuMobile(e) {
    e.preventDefault();

    if (window.innerWidth <= 1128) {
      if (menu === 'opened') {
        setMenu('');
        setTimeout(() => {
          setToggleMenu(!toggleMenu);
        }, 400);
      } else {
        setToggleMenu(!toggleMenu);
        setTimeout(() => {
          setMenu('opened');
        }, 20);
      }
    } else {
      history.push('/');
    }
  }

  return (
    <>
      <Container
        id="headerNavbar"
        className={menu === 'opened' && 'menuOpened'}>
        <div className="logo-search">
          <a href="/" className="logo" onClick={e => openMenuMobile(e)}>
            <Logo size="2.5em" color={colors.primary} />
            <FiChevronDown size="15" color="#999" className="seta" />
          </a>
          <FormSearch>
            <FiSearch size="20" color="#333" />
            <input placeholder="Buscar" />
          </FormSearch>
        </div>
        <Navbar>
          <ul>
            <li>
              <a href="/">
                <FiGlobe size="12" />
                Portugues (BR)
              </a>
            </li>
            <li>
              <a href="/">R$ BRL</a>
            </li>
            <li>
              <a href="/">Torne-se um anfitrião</a>
            </li>
            <li>
              <a href="/">Ajuda</a>
            </li>
            <li>
              <a href="/">Cadastre-se</a>
            </li>
            <li>
              <a href="/">Entrar</a>
            </li>
          </ul>
        </Navbar>
      </Container>
      {toggleMenu && <NavMobile className={menu} />}
    </>
  );
}

export default React.memo(Header);
