import React from 'react';

import { Container } from './styles';
import SVGHousePeople from '~/assets/icons/house-people';
import SVGGlobe from '~/assets/icons/globe';

export default function NavMobile(props) {
  return (
    <Container {...props}>
        <ul>
          <li><a href="/">Acomodação</a></li>
          <li className="divider"></li>
          <li><a href="/">Faça o download do Aplicativo</a></li>
          <li><a href="/">Convidar amigos</a></li>
          <li><a href="/">Indique anfitriões</a></li>
          <li><a href="/">Airbnb for Work</a></li>
          <li className="divider"></li>
          <li>
            <a href="/">
              <span>Idioma</span>
              <small>Portugues (BR)</small>
            </a>
            <SVGGlobe size="25"/>
          </li>
          <li>
            <a href="/">
              <span>Moeda</span>
              <small>R$ BRL</small>
            </a>
          </li>
          <li className="divider"></li>
          <li>
            <a href="/">
              <span>Anuncie seu espaço</span>
              <small>Ganhe até <strong>R$3.234 por mes</strong></small>
            </a>
            <SVGHousePeople size="40" />
          </li>
          <li><a href="/">Saiba tudo sobre hospedagem no Airbnb</a></li>
          <li>
            <a href="/">
              <span>Hospedagem uma experiência</span>
              <small>Ganhe dinheiro fazendo o que ama</small>
            </a>
          </li>
          <li className="divider"></li>
          <li><a href="/">Ajuda</a></li>
          <li><a href="/">Cadastre-se</a></li>
          <li><a href="/">Entrar</a></li>
        </ul>
      </Container>
  );
}
