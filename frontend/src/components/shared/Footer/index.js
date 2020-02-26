import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Content from '~/components/shared/Content';
import Logo from '~/assets/logo';

import { Container, Wrapper, Widget, Social, CopyRight } from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <Wrapper>
        <Widget>
          <strong>Airbnb</strong>
          <ul>
            <li><a href="/">Carreiras</a></li>
            <li><a href="/">Noticias</a></li>
            <li><a href="/">Políticas de Uso</a></li>
            <li><a href="/">Ajuda</a></li>
            <li><a href="/">Diversidade e Inclusão</a></li>
          </ul>
        </Widget>

        <Widget>
          <strong>Descubra</strong>
          <ul>
            <li><a href="/">Confiança e Segurança</a></li>
            <li><a href="/">Travel Credit</a></li>
            <li><a href="/">Cartões de Presente</a></li>
            <li><a href="/">Airbnb Citizen</a></li>
            <li><a href="/">Viagens e Negócios</a></li>
            <li><a href="/">Coisas para fazer <span>Novo</span></a></li>
            <li><a href="/">Airbnbmag</a></li>
          </ul>
        </Widget>

        <Widget>
          <strong>Hospedando</strong>
          <ul>
            <li><a href="/">Por Que Hospedar</a></li>
            <li><a href="/">Hospitalidade</a></li>
            <li><a href="/">Hospedando com Responsabilidade</a></li>
            <li><a href="/">Central da Comunidade</a></li>
            <li><a href="/">Ofereça uma experiência <span>Novo</span></a></li>
            <li><a href="/">Open Homes</a></li>
          </ul>
        </Widget>

        <Widget>
          <Social>
            <a href="/">
              <FiFacebook size="20" color="#666"/>
            </a>
            <a href="/">
              <FiTwitter size="20" color="#666"/>
            </a>
            <a href="/">
              <FiInstagram size="20" color="#666"/>
            </a>
          </Social>
          <ul>
            <li><a href="/">Condições</a></li>
            <li><a href="/">Política de Privacidade</a></li>
            <li><a href="/">Mapa do Site</a></li>
          </ul>
        </Widget>
      </Wrapper>
        <CopyRight>
        <Logo size="1.5em" color="#767676"/>
        © 2020 Airbnb, Inc. All rights reserved.
      </CopyRight>
      </Content>
    </Container>
  );
}
