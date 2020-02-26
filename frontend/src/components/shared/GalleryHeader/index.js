import React from 'react';
import Slider from '~/components/shared/Slider';

import { Container, List, ShareAndSave } from './styles';

import { FiShare, FiHeart } from 'react-icons/fi';

import BGImage from '~/components/shared/BGImage';
import Button from '~/components/shared/Button';

import room4 from '~/assets/rooms/room4.jpg';
import room42 from '~/assets/rooms/room4-2.jpg';
import room43 from '~/assets/rooms/room4-3.jpg';
import room44 from '~/assets/rooms/room4-4.jpg';
import room45 from '~/assets/rooms/room4-5.jpg';

export default function GalleryHeader() {
  return (
    <Container>
      <ShareAndSave>
        <Button
          label="Compartilhar"
          iconLeft={<FiShare />}
          level="light"
          onClick={() => {}}
        />
        <Button
          label="Salvar"
          iconLeft={<FiHeart />}
          level="light"
          onClick={() => {}}
        />
      </ShareAndSave>
      <List>
        {window.innerWidth <= 744 ? (
          <Slider>
            <BGImage
              src={room4}
              size={['70vw', '100%']}
              bgSize="contain"
              className="img first"
            />
            <BGImage
              src={room42}
              size={['70vw']}
              bgSize="contain"
              className="img"
            />
            <BGImage
              src={room43}
              size={['70vw']}
              bgSize="contain"
              className="img"
            />
            <BGImage
              src={room44}
              size={['70vw']}
              bgSize="contain"
              className="img"
            />
            <BGImage
              src={room45}
              size={['70vw']}
              bgSize="contain"
              className="img"
            />
          </Slider>
        ) : (
          <>
            <BGImage src={room4} className="first" />
            <div className="col-right">
              <BGImage src={room42} />
              <BGImage src={room43} />
              <BGImage src={room44} />
              <BGImage src={room45} />
            </div>
          </>
        )}
      </List>
      <Button label="Visualizar Fotos" level="light" onClick={() => {}} />
    </Container>
  );
}
