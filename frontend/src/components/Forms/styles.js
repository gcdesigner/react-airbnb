import styled from 'styled-components';

export const FormControl = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 800;
  color: #484848;
  letter-spacing: 0.88px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: ${props => `${props.height}px`};
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  padding: 11px;
  font-size: 16px;
  font-weight: 600;
  color: #484848;
`;

export const Select = styled.select`
  width: 100%;
  height: ${props => `${props.height}px`};
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  padding: 11px;
  font-size: 16px;
  font-weight: 600;
  color: #484848;
`;

export const FormGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    &:first-child {
      input,
      select {
        border-radius: 4px 0 0 4px;
      }
    }
    &:last-child {
      input,
      select {
        border-radius: 0 4px 4px 0;
        border-left: 0;
      }
    }
  }
`;
