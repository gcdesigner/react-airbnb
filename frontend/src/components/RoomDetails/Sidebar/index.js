import React, { useState, useEffect, useRef, memo } from 'react';
import colors from '~/styles/colors';
import { AiFillStar, AiOutlineFlag } from 'react-icons/ai';
import { FormGroup, FormInput } from '~/components/shared/Forms';
import DropdownGuets from '~/components/shared/DropdownGuests';
import Button from '~/components/shared/Button';
import lighBulb from '~/assets/icons/light-bulb.gif';

import { Container, Card, Price, Form, Footer, DenounceAds } from './styles';

function Sidebar() {
  const initialPrice = 1269;
  const [price, setPrice] = useState(initialPrice);
  const [childData, setChildData] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [scroll, setScroll] = useState('');

  const card = useRef(null);

  var formartter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  useEffect(() => {
    function handleScroll() {
      window.addEventListener('scroll', function(event) {
        var sc = this.scrollY;
        setScroll(sc);
      });
    }
    handleScroll();
  }, [scroll]);

  useEffect(() => {
    calcPrice();
  }, [childData]);

  function handleValue(value) {
    setChildData(value);
  }

  function calcPrice() {
    const calc = (childData - 1) * 96 + initialPrice;
    const format = formartter.format(calc);
    setPrice(format);
  }

  return (
    <Container className={scroll >= 667 && 'fixed'}>
      <Card ref={card}>
        <Price>
          <div className="price">
            <strong>{price} </strong>
            <small>por noite</small>
          </div>
          <div className="comments">
            <AiFillStar size="11" color={colors.secondary} />
            <strong>4,87 </strong>
            <span>(499 comentários)</span>
          </div>
        </Price>

        <Form>
          <FormGroup>
            <FormInput
              label="Datas"
              id="check-in"
              placeholder="Checkin"
              value={checkin}
              onChange={e => setCheckin(e.target.value)}
            />
            <FormInput
              label="checkout"
              hideLabel
              id="checkout"
              placeholder="Checkout"
              value={checkout}
              onChange={e => setCheckout(e.target.value)}
            />
          </FormGroup>

          <DropdownGuets parentValue={handleValue} />

          <Button label="Reservar" onClick={() => {}} block />
          <small className="text-center block bold">
            Você ainda não será cobrado
          </small>
        </Form>
        <Footer>
          <div>
            <strong>Este lugar está chamando bastante atenção.</strong>
            <p>Ela recebeu mais de 500 visualizações na última semana.</p>
          </div>
          <img src={lighBulb} />
        </Footer>
      </Card>
      <DenounceAds>
        <a href="/">
          <AiOutlineFlag size="15" />
          Denunciar este anúncio
        </a>
      </DenounceAds>
    </Container>
  );
}

export default memo(Sidebar);
