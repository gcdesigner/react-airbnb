import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import BGImage from '~/components/shared/BGImage';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import roomImage from '~/assets/rooms/room2.jpg';
import roomImage2 from '~/assets/rooms/room3.jpg';
import roomImage3 from '~/assets/rooms/room4.jpg';

import { Container, Wrapper, List, Item } from './stylesRecommendedRooms';

export default function RecommendedRooms() {
  const [nav, setNav] = useState(0);

  function handleSlide(event) {
    if (event == 'prev') {
      if (!nav == 0) {
        const calc = nav - 33.3;
        setNav(calc);
      }
    } else {
      const calc = nav + 33.3;
      setNav(calc);
    }
  }

  return (
    <Container>
      <h2>Outras acomodações que você pode curtir</h2>
      <Wrapper>
        <button
          type="button"
          className="prev"
          onClick={e => handleSlide('prev')}>
          <FiChevronLeft />
        </button>
        <button
          type="button"
          className="next"
          onClick={e => handleSlide('next')}>
          <FiChevronRight />
        </button>

        <List>
          <div style={{ transform: `translateX(-${nav}%)` }}>
            <Item>
              <BGImage src={roomImage} size={['222px']} />

              <div className="meta">
                <div className="type-rate">
                  <small className="type">Bangalô inteiro &#183; 2 camas</small>
                  <div className="rate">
                    <FaStar size="12" color="red" />
                    <small>4,92 </small>
                    <small>(135)</small>
                  </div>
                </div>

                <span className="title">JT Artist Retreat 1 mile to JTNP</span>
                <span className="price">
                  <strong>R$ 713</strong>/noite
                </span>
              </div>
            </Item>

            <Item>
              <BGImage src={roomImage2} size={['222px']} />

              <div className="meta">
                <div className="type-rate">
                  <small className="type">Bangalô inteiro &#183; 2 camas</small>
                  <div className="rate">
                    <FaStar size="12" color="red" />
                    <small>4,92 </small>
                    <small>(135)</small>
                  </div>
                </div>

                <span className="title">JT Artist Retreat 1 mile to JTNP</span>
                <span className="price">
                  <strong>R$ 713</strong>/noite
                </span>
              </div>
            </Item>

            <Item>
              <BGImage src={roomImage3} size={['222px']} />

              <div className="meta">
                <div className="type-rate">
                  <small className="type">Bangalô inteiro &#183; 2 camas</small>
                  <div className="rate">
                    <FaStar size="12" color="red" />
                    <small>4,92 </small>
                    <small>(135)</small>
                  </div>
                </div>

                <span className="title">JT Artist Retreat 1 mile to JTNP</span>
                <span className="price">
                  <strong>R$ 713</strong>/noite
                </span>
              </div>
            </Item>

            <Item>
              <BGImage src={roomImage3} size={['222px']} />

              <div className="meta">
                <div className="type-rate">
                  <small className="type">Bangalô inteiro &#183; 2 camas</small>
                  <div className="rate">
                    <FaStar size="12" color="red" />
                    <small>4,92 </small>
                    <small>(135)</small>
                  </div>
                </div>

                <span className="title">JT Artist Retreat 1 mile to JTNP</span>
                <span className="price">
                  <strong>R$ 713</strong>/noite
                </span>
              </div>
            </Item>

            <Item>
              <BGImage src={roomImage3} size={['222px']} />

              <div className="meta">
                <div className="type-rate">
                  <small className="type">Bangalô inteiro &#183; 2 camas</small>
                  <div className="rate">
                    <FaStar size="12" color="red" />
                    <small>4,92 </small>
                    <small>(135)</small>
                  </div>
                </div>

                <span className="title">JT Artist Retreat 1 mile to JTNP</span>
                <span className="price">
                  <strong>R$ 713</strong>/noite
                </span>
              </div>
            </Item>

            <Item>
              <BGImage src={roomImage3} size={['222px']} />

              <div className="meta">
                <div className="type-rate">
                  <small className="type">Bangalô inteiro &#183; 2 camas</small>
                  <div className="rate">
                    <FaStar size="12" color="red" />
                    <small>4,92 </small>
                    <small>(135)</small>
                  </div>
                </div>

                <span className="title">JT Artist Retreat 1 mile to JTNP</span>
                <span className="price">
                  <strong>R$ 713</strong>/noite
                </span>
              </div>
            </Item>
          </div>
        </List>
      </Wrapper>
    </Container>
  );
}
