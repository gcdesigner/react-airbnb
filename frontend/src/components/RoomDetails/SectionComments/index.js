import React from 'react';
import { FiStar, FiSearch } from 'react-icons/fi';

import { Container, Header, FormControl, Statistics } from './styles';

export default function SectionComments() {
  return (
    <Container>
      <Header>
        <strong>Comentários</strong>
        <div>
          <div className="qtd-comments">
            <div>
              <FiStar />
              <strong>4,87</strong>
            </div>
            <div>
              <strong>504</strong>
              <span>comentários</span>
            </div>
          </div>
          <div className="form-search">
            <FormControl>
              <input placeholder="Pesquisar nos comentários" />
              <FiSearch />
            </FormControl>
          </div>
        </div>
      </Header>
      <Statistics>
        <ul>
          <li>
            <span>Coumincação</span>
            <div>
              <div className="barra"></div>
              <span>5,0</span>
            </div>
          </li>
          <li>
            <span>Check-in</span>
            <div>
              <div className="barra"></div>
              <span>4,9</span>
            </div>
          </li>
        </ul>
      </Statistics>
    </Container>
  );
}
