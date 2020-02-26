import styled from 'styled-components';
import { shade } from 'polished';
import colors from '~/styles/colors';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 22px;
  transition: background 0.5s;

  svg {
    margin-right: 10px;
  }

  &:hover,
  &:active {
    background: ${shade(0.15, colors.primary)};
  }

  &:focus {
    box-shadow: 0 0 0 4px #ffffff, 0 0 0 5px #717171,
      0 0 0 6px rgba(255, 255, 255, 0.5);
    outline: none;
    transition: box-shadow 0.2s ease;
  }

  &.btn-secondary {
    background: ${colors.secondary};
  }

  &.btn-light {
    background: #fff;
    color: #484848;
  }
`;
