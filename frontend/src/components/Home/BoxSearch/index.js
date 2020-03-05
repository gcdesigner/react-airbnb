import React, { useState, useEffect } from 'react';

import { FiChevronRight, FiHelpCircle } from 'react-icons/fi';
import { Container, Card, Ads } from './styles';

import { FormInput, FormSelect, FormGroup } from '~/components/shared/Forms';
import Button from '~/components/shared/Button';

export default function HomeBoxSearch() {
  const [where, setWhere] = useState('');
  const [adults, setAdults] = useState([]);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    async function selectAdults() {
      const data = [];

      for (let i = 1; i < 17; i++) {
        data.push({ id: i, value: `${i} adultos` });
      }

      await setAdults(data);
    }

    async function selectChildren() {
      const data = [];

      for (let i = 0; i < 5; i++) {
        data.push({ id: i, value: `${i} crianças` });
      }

      await setChildren(data);
    }

    selectAdults();
    selectChildren();
  }, []);

  return (
    <Container>
      <Card>
        <h1>Reserve casas, hotéis e muito mais no Airbnb</h1>

        <form>
          <FormInput
            label="ONDE"
            id="where"
            value={where}
            placeholder="Em qualquer lugar"
            onChange={e => setWhere(e.target.value)}
          />

          <FormGroup>
            <FormInput
              label="CHECK-IN"
              id="checkin"
              value=""
              placeholder="dd/mm/aaa"
              onChange={() => {}}
            />
            <FormInput
              label="CHECKOUT"
              id="checkout"
              value=""
              placeholder="dd/mm/aaa"
              onChange={() => {}}
            />
          </FormGroup>

          <FormGroup>
            <FormSelect
              label="ADULTOS"
              id="adults"
              data={adults}
              placeholder="1 adulto"
            />
            <FormSelect
              label="ADULTOS"
              id="children"
              data={children}
              placeholder="1 adulto"
            />
          </FormGroup>

          <Button label="Buscar" onClick={() => {}} block />
        </form>
      </Card>
      <Ads>
        <div>
          <p>
            Ganhe até <strong>$733/mês</strong> recebendo hóspedes em seu espaço
            em Brasília
            <button type="button" onClick={() => {}}>
              <FiHelpCircle size="13" color="#484848" />
            </button>
          </p>
        </div>
        <div>
          <a href="/">
            <span>Torne-se um Anfitrião</span>
            <FiChevronRight size="25" color="#484848" />
          </a>
        </div>
      </Ads>
    </Container>
  );
}
