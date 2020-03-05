import React, { useState, useEffect, useMemo } from 'react';
import { FiShare, FiHeart } from 'react-icons/fi';
import Content from '~/components/shared/Content';

import { Container, Nav, Actions } from './styles';

function Breadcrumb() {
  const [offset, setOffset] = useState(1);
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleOffset() {
      const heightHeader = document.getElementById('headerNavbar').offsetHeight;
      const heightGallery = document.getElementById('galleryHeader')
        .offsetHeight;
      setOffset(heightHeader + heightGallery);
    }
    handleOffset();
  }, []);

  useMemo(() => {
    function handleScroll() {
      window.addEventListener('scroll', function() {
        setScroll(this.scrollY);
      });

      scroll >= offset ? setVisible(true) : setVisible(false);
    }
    handleScroll();
  }, [scroll, offset]);

  function handleScrollTo(section) {
    const to = document.getElementById(section).offsetTop;
    window.scrollTo({
      top: to - 100,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      {visible && (
        <Container>
          <Content>
            <Nav>
              <li>
                <button type="button" onClick={e => handleScrollTo('summary')}>
                  Visão geral
                </button>
              </li>
              <li>
                <button type="button" onClick={e => handleScrollTo('comments')}>
                  Comentários
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={e => handleScrollTo('hostProfile')}>
                  O anfitrião
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={e => handleScrollTo('neighborhood')}>
                  Endereço
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={e => handleScrollTo('thingsToRemember')}>
                  Políticas
                </button>
              </li>
            </Nav>
            <Actions>
              <button type="button" onClick={() => {}}>
                <FiShare />
                <span>Compartilhar</span>
              </button>

              <button type="button" onClick={() => {}}>
                <FiHeart />
                <span>Salvar</span>
              </button>
            </Actions>
          </Content>
        </Container>
      )}
    </>
  );
}

export default React.memo(Breadcrumb);
