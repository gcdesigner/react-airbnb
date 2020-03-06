import React, { useState, useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import BGImage from '~/components/shared/BGImage';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import roomsapi from './recommendedRooms.json';

import { Container, Wrapper, List, Item } from './stylesRecommendedRooms';

export default function RecommendedRooms() {
  const itemRef = useRef();
  const listRef = useRef();

  const [navPos, setNavPos] = useState(0);
  const [rooms, setRooms] = useState([]);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);

  useEffect(() => {
    setRooms(roomsapi);
  }, [rooms]);

  function handleSlideNext() {
    const listWidth = listRef.current.offsetWidth - 1;
    const itemWidth = itemRef.current.offsetWidth;
    const calc = navPos + itemWidth;
    setNavPos(calc);

    if (calc > 0 && calc < listWidth) {
      setDisabledPrev(false);
    }

    if (calc >= listWidth) {
      setDisabledNext(true);
      setDisabledPrev(false);
    }
  }

  function handleSlidePrev() {
    const itemWidth = itemRef.current.offsetWidth;
    const calc = navPos - itemWidth;
    setNavPos(calc);

    if (calc <= 0) {
      setDisabledPrev(true);
    }

    if (calc > 0) {
      setDisabledPrev(false);
      setDisabledNext(false);
    }
  }

  return (
    <Container>
      <h2>Outras acomodações que você pode curtir</h2>
      <Wrapper>
        <button
          type="button"
          className="prev"
          onClick={e => handleSlidePrev()}
          disabled={disabledPrev}>
          <FiChevronLeft color="#bbb" />
        </button>
        <button
          type="button"
          className="next"
          onClick={e => handleSlideNext()}
          disabled={disabledNext}>
          <FiChevronRight color="#bbb" />
        </button>

        <List>
          <div ref={listRef} style={{ transform: `translateX(-${navPos}px)` }}>
            {rooms.map(room => (
              <Item ref={itemRef} key={room.id}>
                <BGImage src={room.image} size={['222px']} />

                <div className="meta">
                  <div className="type-rate">
                    <small className="type">
                      {room.type} &#183; {room.beds} camas
                    </small>
                    <div className="rate">
                      <FaStar size="12" color="red" />
                      <small>{room.rate} </small>
                      <small>({room.comments})</small>
                    </div>
                  </div>

                  <span className="title">{room.title}</span>
                  <span className="price">
                    <strong>R$ {room.price}</strong>/noite
                  </span>
                </div>
              </Item>
            ))}
          </div>
        </List>
      </Wrapper>
    </Container>
  );
}
