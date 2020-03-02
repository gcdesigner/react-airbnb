import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoMdMan } from 'react-icons/io';
import { GoVerified } from 'react-icons/go';
import SVGMendal from '~/assets/icons/medal';
import BGImage from '~/components/shared/BGImage';
import Button from '~/components/shared/Button';
import avatar from '~/assets/avatars/avatar4.jpg';

import { Container, Header, SuperHost, About } from './styles';

export default function SectionHostProfile() {
  return (
    <Container>
      <Header>
        <div class="meta">
          <h2>Hospedado por Sara & Rich</h2>
          <p>Joshua Tree, Califórnia · Cadastrou-se em junho de 2010</p>
          <div>
            <FaStar size="12" />
            <span>1.125 avaliações</span>
            <IoMdMan size="14" />
            <span>6 Referências</span>
            <GoVerified size="12" />
            <span>Verificado</span>
          </div>
        </div>
        <BGImage src={avatar} size={['60px', '60px']} circle />
      </Header>

      <SuperHost>
        <p>
          <strong>Sara & Rich é um Superhost</strong> . Os Superhosts são
          anfitriões experientes e muito bem avaliados que se empenham ao máximo
          para proporcionar estadias excelentes para os hóspedes.
        </p>
        <SVGMendal size="40" />
      </SuperHost>

      <About>
        <p>
          We're designers who have fallen in love with creating spaces for
          others to reflect, reset, and create. We split our time between two
          deserts (the Mojave, and the Sonoran). We love the way the heat sinks
          into our bones, the vibrant sunsets, and the wildlife we get to call
          our neighbors.
        </p>

        <strong>Interação com os hóspedes</strong>
        <p>
          While we will not be at the house during your stay, feel free to
          contact us with any questions! We also have a lot of local
          recommendations to share. We send our guests an illustrated pdf before
          their stay with some of our favorite local spots! For check-in, we'll
          give you a code to the lockbox to get the keys and you can arrive
          anytime after 3pm and check yourself in. Please put the keys back
          before checking-out at 11am.
        </p>

        <strong>Sara & Rich apoia o Compromisso de Salário Digno</strong>
        <p>
          As pessoas que limpam a acomodação desse anfitrião recebem um salário
          digno. <a href="/">Saiba mais</a>
        </p>

        <ul>
          <li>
            Idiomas: <strong>English</strong>
          </li>
          <li>
            Taxa de resposta: <strong>99%</strong>
          </li>
          <li>
            Tempo de respostas: <strong>em até uma hora</strong>
          </li>
        </ul>

        <button type="button" onClick={() => {}}>
          Fale com o anfitrião
        </button>
      </About>
    </Container>
  );
}
