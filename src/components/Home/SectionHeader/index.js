import React from 'react';

import { Header, MenuArea, Menu, Logo } from './styles';

import SVGLogo from '~/assets/logo';
import Content from '~/components/shared/Content';
import BoxSearch from '~/components/Home/BoxSearch';

export default function HomeHeader() {
  return (
    <Header>
      <MenuArea>
        <Logo>
          <SVGLogo size="2.2em" color="#fff" />
        </Logo>
        <Menu>
          <li>
            <a href="/">Torne-se um Anfitrião</a>
          </li>
          <li>
            <a href="/">Ajuda</a>
          </li>
          <li>
            <a href="/">Cadastrar-se</a>
          </li>
          <li>
            <a href="/">Entrar</a>
          </li>
        </Menu>
      </MenuArea>
      <Content>
        <BoxSearch />
      </Content>
    </Header>
  );
}
