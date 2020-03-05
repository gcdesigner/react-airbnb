import React, { useState, useEffect, useMemo, useCallback } from 'react';
import colors from '~/styles/colors';
import { AiFillStar, AiOutlineFlag } from 'react-icons/ai';
import { FormGroup, FormInput } from '~/components/shared/Forms';
import DropdownGuets from '~/components/shared/DropdownGuests';
import Button from '~/components/shared/Button';
import lightBulb from '~/assets/icons/light-bulb.gif';

import { Container, Card, Price, Form, Footer, DenounceAds } from './styles';

function Sidebar() {
  const initialPrice = 1269;
  const [price, setPrice] = useState(initialPrice);
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');

  const [offset, setOffset] = useState({
    top: 1,
    bottom: 1,
  });
  const [scroll, setScroll] = useState(0);
  const [fixe, setFixe] = useState(false);
  const [absolute, setAbsolute] = useState(false);

  var formatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  useEffect(() => {
    function handleOffset() {
      const offsetTop = document.getElementById('sidebar').offsetTop;

      const rootHeight = document.getElementById('root').offsetHeight;
      const offsetListings = document.getElementById('similarListings')
        .offsetHeight;
      const offsetFooter = document.getElementById('footer').offsetHeight;

      const footerHeight = offsetFooter + offsetListings;
      const offsetBottom = rootHeight - footerHeight;

      setOffset({
        top: offsetTop - 10,
        bottom: offsetBottom + 470,
      });
    }

    handleOffset();
  }, []);

  useMemo(() => {
    function handleScroll() {
      window.addEventListener('scroll', function() {
        setScroll(this.scrollY);
      });

      scroll >= offset.top ? setFixe(true) : setFixe(false);

      scroll >= offset.bottom ? setAbsolute(true) : setAbsolute(false);
    }
    handleScroll();
  }, [scroll, offset]);

  const calcPriceOnChange = useCallback(
    value => {
      const calc = (value - 2) * 96 + initialPrice;
      const format = formatter.format(calc);
      if (value > 2) {
        setPrice(format);
      } else {
        setPrice(formatter.format(initialPrice));
      }
    },
    [formatter]
  );

  return (
    <Container
      id="bookSidebar"
      className={(absolute && 'absolute') || (fixe && 'fixed')}>
      <Card>
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

          <DropdownGuets guests={calcPriceOnChange} />

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
          <img src={lightBulb} alt="light bulb" />
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

export default React.memo(Sidebar);
