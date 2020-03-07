import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import {
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
  Counter,
  Footer,
  Text,
  Close,
} from './styles';

function DropdownGuests({ guests }) {
  const [toggle, setToggle] = useState(false);
  const maxGuests = 6;
  const maxBabies = 5;
  const [totalGuests, setTotalGuests] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [counter, setCounter] = useState({
    adults: 1,
    children: 0,
    babies: 0,
  });

  const dropRef = useRef();

  useEffect(() => {
    function sumTotalGuests() {
      const sum = counter.adults + counter.children;
      setTotalGuests(sum);
      guests(sum);

      if (sum === maxGuests) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
    sumTotalGuests();
  }, [counter, guests]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  function handleClickOutside(e) {
    if (dropRef.current && !dropRef.current.contains(e.target)) {
      setToggle(false);
    }
  }

  function handleToggle() {
    setToggle(!toggle);
  }

  function handleAdd(type) {
    setCounter({
      adults: type === 'adults' ? counter.adults + 1 : counter.adults,
      children: type === 'children' ? counter.children + 1 : counter.children,
      babies: type === 'babies' ? counter.babies + 1 : counter.babies,
    });
  }

  function handleRemove(type) {
    setCounter({
      adults: type === 'adults' ? counter.adults - 1 : counter.adults,
      children: type === 'children' ? counter.children - 1 : counter.children,
      babies: type === 'babies' ? counter.babies - 1 : counter.babies,
    });
  }

  return (
    <Container ref={dropRef}>
      <DropdownToggle className={toggle && 'show'}>
        <label>Hóspedes</label>
        <button type="button" onClick={handleToggle}>
          <span>
            {totalGuests} hóspedes
            {counter.babies ? `, ${counter.babies} bebês` : ''}
          </span>
          {toggle ? (
            <FiChevronUp size="25" color="#484848" />
          ) : (
            <FiChevronDown size="25" color="#484848" />
          )}
        </button>
      </DropdownToggle>

      <DropdownMenu className={toggle && 'show'}>
        <DropdownItem>
          <Label>
            <strong>Adultos</strong>
          </Label>
          <Counter>
            <button
              type="button"
              className="btn-minus"
              onClick={() => handleRemove('adults')}
              disabled={counter.adults === 1 && 'disabled'}>
              <span>-</span>
            </button>
            <span>{counter.adults}</span>
            <button
              type="button"
              className="btn-plus"
              onClick={() => handleAdd('adults')}
              disabled={disabled}>
              <span>+</span>
            </button>
          </Counter>
        </DropdownItem>

        <DropdownItem>
          <Label>
            <strong>Crianças</strong>
            <small>Idade 2 - 12</small>
          </Label>
          <Counter>
            <button
              type="button"
              className="btn-minus"
              onClick={() => handleRemove('children')}
              disabled={counter.children === 0 && 'disabled'}>
              <span>-</span>
            </button>
            <span>{counter.children}</span>
            <button
              type="button"
              className="btn-plus"
              onClick={() => handleAdd('children')}
              disabled={disabled}>
              <span>+</span>
            </button>
          </Counter>
        </DropdownItem>

        <DropdownItem>
          <Label>
            <strong>Bebês</strong>
            <small>Meno de 2</small>
          </Label>
          <Counter>
            <button
              type="button"
              className="btn-minus"
              onClick={() => handleRemove('babies')}
              disabled={counter.babies === 0 && 'disabled'}>
              <span>-</span>
            </button>
            <span>{counter.babies}</span>
            <button
              type="button"
              className="btn-plus"
              onClick={() => handleAdd('babies')}
              disabled={counter.babies >= maxBabies && 'disabled'}>
              <span>+</span>
            </button>
          </Counter>
        </DropdownItem>

        <Footer>
          <Text>
            Máximo de 6 hóspedes. Bebês não devem ser incluídos no número total
            de hóspedes.
          </Text>
          <Close>
            <button type="button" onClick={handleToggle}>
              <span>Fechar</span>
            </button>
          </Close>
        </Footer>
      </DropdownMenu>
    </Container>
  );
}

export default React.memo(DropdownGuests);
