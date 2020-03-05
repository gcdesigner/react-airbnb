import React from 'react';

import { FiHome, FiBell, FiAward, FiSmile } from 'react-icons/fi';

import { Container } from './styles';

function SectionDetails() {
  return (
    <Container id="roomDetails">
      <ul className="top">
        <li>6 hóspedes</li>
        <li>2 quartos</li>
        <li>2 camas</li>
        <li>2 banehiros</li>
      </ul>

      <ul className="bottom">
        <li>
          <FiHome size="15" />
          <div>
            <strong>Casa inteira</strong>
            <p>Você terá a acomodação do tipo casa só para você.</p>
          </div>
        </li>
        <li>
          <FiBell size="15" />
          <div>
            <strong>Self check-in</strong>
            <p>Faça check-in sozinho com o cofre eletrônico.</p>
          </div>
        </li>
        <li>
          <FiSmile size="15" />
          <div>
            <strong>Extremamente limpa</strong>
            <p>
              12 hóspedes recentes disseram que a limpeza deste lugar estava
              impecável.
            </p>
          </div>
        </li>
        <li>
          <FiAward size="15" />
          <div>
            <strong>Sara & Rich é um Superhost</strong>
            <p>
              Superhosts são anfitriões experientes e muito bem avaliados,
              comprometidos em fornecer estadias excelentes para seus hóspedes.
            </p>
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default React.memo(SectionDetails);
