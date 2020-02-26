import styled from 'styled-components';

const inputStyle = {
  width: '100%',
  background: '#fff',
  border: '1px solid #ebebeb',
  borderRadius: '4px',
  padding: '11px',
  fontSize: '16px',
  fontWeight: '600',
  color: '#484848',
};

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

  &.hide {
    color: transparent;
  }
`;

export const Input = styled.input`
  height: ${props => `${props.height}px`};
  ${inputStyle};
`;

export const Select = styled.select`
  height: ${props => `${props.height}px`};
  ${inputStyle};
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
