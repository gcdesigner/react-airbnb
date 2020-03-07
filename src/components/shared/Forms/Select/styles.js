import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  border: 1px solid #ebebeb;
  background: #fff;
  border-radius: 4px;

  svg {
    position: absolute;
    right: 8px;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  border: 0;
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  color: #484848;
  padding: 11px 40px 11px 11px;

  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';

  &::-ms-expand {
    display: none;
  }
`;
