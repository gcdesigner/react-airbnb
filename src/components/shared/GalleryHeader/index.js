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

function GalleryHeader() {
  const images = [
    {
      id: '0',
      image: room4,
      alt: 'imagem 1',
    },
    {
      id: '1',
      image: room42,
      alt: 'imagem 2',
    },
    {
      id: '2',
      image: room43,
      alt: 'imagem 3',
    },
    {
      id: '3',
      image: room44,
      alt: 'imagem 4',
    },
    {
      id: '4',
      image: room45,
      alt: 'imagem 5',
    },
  ];

  return (
    <Container id="galleryHeader">
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
            {images.map(image => (
              <BGImage
                key={image.id}
                image={image.image}
                size={['70vw', '100%']}
                bgSize="contain"
                className={('img', image.id === 0 && 'first')}
                alt={image.alt}
              />
            ))}
          </Slider>
        ) : (
          <>
            <div class="first">
              <BGImage image={images[0].image} className="first" />
            </div>
            <div className="col-right">
              {images
                .filter((_, index) => index > 0)
                .map((img, index) => (
                  <BGImage key={index} image={img.image} />
                ))}
            </div>
          </>
        )}
      </List>
      <Button label="Visualizar Fotos" level="light" onClick={() => {}} />
    </Container>
  );
}

export default React.memo(GalleryHeader);
