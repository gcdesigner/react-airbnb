import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncSelect from 'react-select/async';

import Label from '../Forms/Label';

import { Container } from './styles';

const citiesApiUrl =
  'https://servicodados.ibge.gov.br/api/v1/localidades/distritos';

function InputCities(props, ref) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function getCities() {
      const response = await axios.get(citiesApiUrl);
      const data = response.data.map(i => ({
        value: `${i.nome} - ${i.municipio.microrregiao.mesorregiao.UF.sigla}`,
        label: `${i.nome} - ${i.municipio.microrregiao.mesorregiao.UF.sigla}`,
      }));
      setCities(data);
    }
    getCities();
  }, []);

  const filterCities = inputValue => {
    return cities.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterCities(inputValue));
    }, 1000);
  };

  function handleChange(inputValue) {
    return inputValue;
  }

  return (
    <>
      <Label>ONDE</Label>
      <Container>
        <AsyncSelect
          {...props}
          cacheOptions
          loadOptions={loadOptions}
          className="input-cities"
          classNamePrefix="ic"
          onInputChange={handleChange}
          placeholder="Em qualquer lugar"
          ref={ref}
        />
      </Container>
    </>
  );
}

export default React.forwardRef(InputCities);
