import React, { useState, useEffect, useRef } from 'react';

import InputCities from '~/components/shared/InputCities';

import { FiChevronRight, FiHelpCircle } from 'react-icons/fi';
import { Container, Card, Ads } from './styles';

import Form from '~/components/shared/Forms/Form';
import InputGroup from '~/components/shared/Forms/InputGroup';
import Input from '~/components/shared/Forms/Input';
import Select from '~/components/shared/Forms/Select';

import Button from '~/components/shared/Button';

export default function HomeBoxSearch() {
  const [city, setCity] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');

  const [adultsArray, setAdultsArray] = useState([]);
  const [childrenArray, setChildrenArray] = useState([]);

  const citiesRef = useRef();

  useEffect(() => {
    async function selectAdults() {
      const data = [];

      for (let i = 1; i < 17; i++) {
        data.push({ id: i, value: `${i} adultos` });
      }

      await setAdultsArray(data);
    }

    async function selectChildren() {
      const data = [];

      for (let i = 0; i < 5; i++) {
        data.push({ id: i, value: `${i} crianças` });
      }

      await setChildrenArray(data);
    }

    selectAdults();
    selectChildren();
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    const data = {
      city,
      checkin,
      checkout,
      adults,
      children,
    };

    console.log(data);
  }

  return (
    <Container>
      <Card>
        <h1>Reserve casas, hotéis e muito mais no Airbnb</h1>

        <Form onSubmit={onSubmit}>
          <InputCities ref={citiesRef} onChange={e => setCity(e.value)} />

          <InputGroup>
            <Input
              label="CHECK-IN"
              name="checkin"
              placeholder="dd/mm/aaa"
              value={checkin}
              onChange={e => setCheckin(e.target.value)}
            />
            <Input
              label="CHECKOUT"
              name="checkout"
              placeholder="dd/mm/aaa"
              value={checkout}
              onChange={e => setCheckout(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Select
              label="ADULTOS"
              name="adults"
              data={adultsArray}
              placeholder="1 adulto"
              value={adults}
              onChange={e => setAdults(e.target.value)}
            />
            <Select
              label="CRIANÇAS"
              name="children"
              data={childrenArray}
              placeholder="1 adulto"
              value={children}
              onChange={e => setChildren(e.target.value)}
            />
          </InputGroup>

          <Button type="submit" label="Buscar" onClick={() => {}} block />
        </Form>
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
