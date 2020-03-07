import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Space from './AboutSpace';
import GuestAcess from './GuestAccess';
import Observations from './Observations';

import { Container } from './styles';

function SectionDescription() {
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <Container id="roomDescription">
      <div className="translate">
        <button type="button" onClick={() => {}}>
          Traduzir esta descrição para Português
        </button>
      </div>
      <div className="resume">
        <p>
          The Joshua Tree House is a two bed two bath 1949 hacienda located 10
          minutes from the west entrance of Joshua Tree National Park in Joshua
          Tree, CA.
        </p>

        <p>
          This is a place for dreamers to reset, reflect, and create. Designed
          with a 'slow' pace in mind, our hope is that you enjoy every part of
          your stay; from making local coffee by drip in the morning, choosing
          the perfect record to put on as the sun sets, or by relaxing in the
          hot tub surrounded by over 100 Joshua Trees and a starry night sky.
        </p>
      </div>

      <div className={`all-description ${showMore ? 'show' : 'hide'}`}>
        <Space />
        <GuestAcess />
        <Observations />
      </div>

      <button className="show-more" type="button" onClick={handleShowMore}>
        {showMore ? 'Ocultar' : 'Leia mais sobre este espaço'}
        {showMore ? <FiChevronUp /> : <FiChevronDown />}
      </button>

      <button
        className="talk-proprietary"
        type="button"
        onClick={handleShowMore}>
        Fale com o anfitrião
      </button>
    </Container>
  );
}

export default React.memo(SectionDescription);
