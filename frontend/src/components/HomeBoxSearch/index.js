import React, { useState, useEffect } from 'react';

import { Container, Card, Ads } from './styles';

import { FormInput, FormSelect, FormGroup } from '../Forms';
import Button from '../Button';
import { FiChevronRight, FiHelpCircle } from 'react-icons/fi';

export default function HomeBoxSearch() {
  const [where, setWhere] = useState('');
  const [adults, setAdults] = useState([]);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    async function selectAdults() {
      const data = [];

      for (let i = 1; i < 17; i++) {
        await data.push({ id: i, value: `${i} adultos` });
      }

      setAdults(data);
    }

    async function selectChildren() {
      const data = [];

      for (let i = 0; i < 5; i++) {
        await data.push({ id: i, value: `${i} crianças` });
      }

      setChildren(data);
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
              label="CHECK-OUT"
              id="checkin"
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

          <Button label="Buscar" action={() => {}} />
        </form>
      </Card>
      <Ads>
        <div>
          <p>
            Ganhe até <strong>$733/mês</strong> recebendo hóspedes em seu espaço
            em Brasília
            <button>
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
