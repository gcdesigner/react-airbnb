import React from 'react';

import { Container } from './styles';
import Button from '~/components/shared/Button';

export default function SectionBannerAction() {
  return (
    <Container>
      <header>
        <h2>Quando você vai viajar?</h2>
      </header>
      <Button level="secondary" label="Adicionar datas" onClick={() => {}}/>
    </Container>
  );
}
