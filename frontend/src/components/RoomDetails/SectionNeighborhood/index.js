import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { Container, Text, Map } from './styles';

export default function SectionNeighborhood() {
  return (
    <Container id="neighborhood">
      <h2>O bairro</h2>
      <Text>
        <p>
          A acomodação de Sara & Rich está localizada em Joshua Tree,
          Califórnia, Estados Unidos.
        </p>
        <p>
          Joshua Tree is a small community made up of musicians, artists, and
          explorers. In the village you will find locally owned and run
          restaurants, art galleries, music venues, and vintage shops.
        </p>
        <p>
          There are many wonderful places to visit during your stay at the house
          including the Joshua Tree National Park, Pappy & Harriet's, the
          Integratron, Salvation Mountain, the Salton Sea, Noah Purifoy Outdoor
          Museum, Crossroads, BKB Ceramics, and la Copine (a delicious new
          french restaurant in the desert).
        </p>
        <button type="button" onClick={() => {}}>
          Leia mais sobre o bairro
          <FiChevronDown />
        </button>
      </Text>

      <Map>
        <a href="/">Mostrar guia</a>

        <div>
          {/* <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15352.608730045695!2d-47.97754696258921!3d-15.848596932208315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8cc998cfaa0da001!2sKoni!5e0!3m2!1sen!2sbr!4v1583358984429!5m2!1sen!2sbr"></iframe> */}
        </div>

        <p>
          A localização exata é fornecida 48 horas após a confirmação da
          reserva.
        </p>
      </Map>
    </Container>
  );
}
