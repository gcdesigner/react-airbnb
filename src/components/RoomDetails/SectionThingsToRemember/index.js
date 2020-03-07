import React from 'react';
import { MdSmokeFree, MdPets } from 'react-icons/md';
import { FaGlassCheers } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

import { Container, Header, HomeRules, Cancellation } from './styles';

export default function SectionThingsToRemember() {
  return (
    <Container id="thingsToRemember">
      <Header>
        <h2>Coisas para lembra</h2>
        <div>
          <div>
            <strong>Check-in: </strong>
            Depois das 15:00
          </div>
          <div>
            <strong>Checkout: </strong>
            11:00
          </div>
        </div>
        <span>Self check-in com lockbox</span>
      </Header>

      <HomeRules>
        <h3>Regras da Casa</h3>

        <ul>
          <li>
            <MdSmokeFree size="22" />
            Proibido fumar
          </li>
          <li>
            <MdPets size="22" />
            Permite animais de estimação
          </li>
          <li>
            <FaGlassCheers size="22" />
            Permitidas festas ou eventos
          </li>
        </ul>

        <button type="button" onClick={() => {}}>
          Leia todas as Regras
          <FiChevronDown />
        </button>
      </HomeRules>

      <Cancellation>
        <h3>Cancelamentos</h3>
        <p>
          Adicione as datas de viagem para obter as informações de cancelamento
          dessa reserva.
        </p>
        <button type="button" onClick={() => {}}>
          Adicionar datas
        </button>
      </Cancellation>
    </Container>
  );
}
